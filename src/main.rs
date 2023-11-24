use byteorder::{BigEndian, ByteOrder};
use std::net::UdpSocket;

// Connect to DNS server on http://127.0.0.1:2053

const SERVER_PORT: &str = "2053";
const SERVER_ADDRESS: &str = "127.0.0.1";

#[derive(Clone)]
struct DnsHeader {
    id: u16,
    qr: u8,
    opcode: u8,
    aa: u8,
    tc: u8,
    rd: u8,
    ra: u8,
    z: u8,
    rcode: u8,
    qdcount: u16,
    ancount: u16,
    nscount: u16,
    arcount: u16,
}

impl DnsHeader {
    fn new(data: &[u8]) -> DnsHeader {
        let mut id = [0u8; 2];
        id.copy_from_slice(&data[..2]);

        let id = u16::from_be_bytes(id);
        let opcode = (data[2] >> 3) & 15;
        let rd = data[2] & 1;
        let rcode = if opcode == 0 { 0u8 } else { 4u8 };

        DnsHeader {
            id,
            qr: 1,
            opcode,
            aa: 0,
            tc: 0,
            rd,
            ra: 0,
            z: 0,
            rcode,
            qdcount: 1, // Updated QDCOUNT for the question section
            ancount: 1, // Updated ANCOUNT for the answer section
            nscount: 0,
            arcount: 0,
        }
    }

    fn to_bytes(&self) -> Vec<u8> {
        let mut bytes = Vec::with_capacity(12);
        bytes.extend_from_slice(&self.id.to_be_bytes());
        bytes.push((self.qr << 7) | (self.opcode << 3) | (self.aa << 2) | (self.tc << 1) | self.rd);
        bytes.push((self.ra << 7) | (self.z << 4) | self.rcode);
        bytes.extend_from_slice(&self.qdcount.to_be_bytes());
        bytes.extend_from_slice(&self.ancount.to_be_bytes());
        bytes.extend_from_slice(&self.nscount.to_be_bytes());
        bytes.extend_from_slice(&self.arcount.to_be_bytes());
        bytes
    }
}

struct DNSQuestion {
    domain_name: String,
    query_type: u16,
    query_class: u16,
}

impl DNSQuestion {
    fn parse(data: &[u8]) -> DNSQuestion {
        let mut domain_name = String::new();
        let mut index = 0;

        // Parse domain name
        loop {
            let label_len = data[index] as usize;
            if label_len == 0 {
                break;
            }
            if index > 0 {
                domain_name.push('.');
            }
            domain_name
                .push_str(std::str::from_utf8(&data[index + 1..index + 1 + label_len]).unwrap());
            index += 1 + label_len;
        }

        // Skip null terminator
        index += 1;

        // Parse query type and class
        let query_type = BigEndian::read_u16(&data[index..index + 2]);
        let query_class = BigEndian::read_u16(&data[index + 2..index + 4]);

        DNSQuestion {
            domain_name,
            query_type,
            query_class,
        }
    }

    fn to_bytes(&self) -> Vec<u8> {
        let mut bytes = Vec::new();
        for label in self.domain_name.split('.') {
            bytes.push(label.len() as u8);
            bytes.extend_from_slice(label.as_bytes());
        }
        bytes.push(0); // Null terminator
        bytes.extend_from_slice(&self.query_type.to_be_bytes());
        bytes.extend_from_slice(&self.query_class.to_be_bytes());
        bytes
    }
}

struct ResourceRecord {
    domain_name: String,
    rtype: u16,
    class: u16,
    ttl: u32,
    rdlength: u16,
    rdata: Vec<u8>,
}

impl ResourceRecord {
    fn new() -> ResourceRecord {
        ResourceRecord {
            domain_name: "codecrafters.io".to_string(),
            rtype: 1,    // A record type
            class: 1,    // IN record class
            ttl: 60,     // TTL can be any value
            rdlength: 4, // Length of the IPv4 address
            rdata: vec![8, 8, 8, 8],
        }
    }

    fn to_bytes(&self) -> Vec<u8> {
        let mut bytes: Vec<u8> = Vec::new();
        for label in self.domain_name.split('.') {
            bytes.push(label.len() as u8);
            bytes.extend_from_slice(label.as_bytes());
        }
        bytes.push(0);
        bytes.extend_from_slice(&self.rtype.to_be_bytes());
        bytes.extend_from_slice(&self.class.to_be_bytes());
        bytes.extend_from_slice(&self.ttl.to_be_bytes());
        bytes.extend_from_slice(&self.rdlength.to_be_bytes());
        bytes.extend_from_slice(&self.rdata);
        bytes
    }
}

fn main() {
    println!("Logs from your program will appear here!");

    let udp_socket = UdpSocket::bind(format!("{}:{}", SERVER_ADDRESS, SERVER_PORT))
        .expect("Failed to bind to address");
    let mut buf = [0; 512];

    loop {
        match udp_socket.recv_from(&mut buf) {
            Ok((size, source)) => {
                let dns_header = DnsHeader::new(&buf[0..size]);
                println!("Received {} bytes from {}", size, source);

                let dns_question = DNSQuestion::parse(&buf[12..]); // Assuming the question section starts at byte 12
                let resource_record = ResourceRecord::new();

                let mut response_header = dns_header.clone();
                response_header.qdcount = 1; // Assuming one question in the response
                response_header.ancount = 1; // Assuming one answer in the response

                let mut response = response_header.to_bytes();
                response.extend_from_slice(&dns_question.to_bytes());
                response.extend_from_slice(&resource_record.to_bytes());

                udp_socket
                    .send_to(&response, source)
                    .expect("Failed to send response");
            }
            Err(e) => {
                eprintln!("Error receiving data: {}", e);
                break;
            }
        }
    }
}
