use byteorder::{ByteOrder, BigEndian};
use std::net::UdpSocket;

// Connect to DNS server on http://127.0.0.1:2053

const SERVER_PORT: &str = "2053";
const SERVER_ADDRESS: &str = "127.0.0.1";
const PACKET_IDENTIFIER: u16 = 1234;

#[repr(C, packed)]
#[derive(Default)]
struct DnsHeader {
    id: u16,
    flags: u16,
    qdcount: u16,
    ancount: u16,
    nscount: u16,
    arcount: u16,
}

impl DnsHeader {
    fn new() -> DnsHeader {
        DnsHeader {
            id: PACKET_IDENTIFIER,
            flags: 0b1000_0000_0000_0000, // Set QR bit to 1
            qdcount: 1, // Set QDCOUNT to any valid value
            ancount: 1, // Set ANCOUNT to any valid value
            nscount: 0, // Set NSCOUNT to any valid value
            arcount: 0, // Set ARCOUNT to any valid value
        }
    }

    fn mimic_flags(&mut self, flags: u16) {
        // Set OPCODE, RD bits based on received flags
        self.flags |= flags & 0b0000_0111_1000_0000;
        // Set RCODE to 4 if OPCODE is 0, else set to 0
        self.flags |= if (self.flags & 0b0000_0000_0111_1000) == 0 {
            0b0000_0000_0000_0100
        } else {
            0
        };
    }

    fn to_bytes(&self) -> Vec<u8> {
        let mut bytes = Vec::new();
        bytes.extend_from_slice(&self.id.to_be_bytes());
        bytes.extend_from_slice(&self.flags.to_be_bytes());
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
    fn new() -> DNSQuestion {
        DNSQuestion {
            domain_name: "codecrafters.io".to_string(),
            query_type: 1,  // A record type
            query_class: 1, // IN record class
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
                let _received_data = String::from_utf8_lossy(&buf[0..size]);
                println!("Received {} bytes from {}", size, source);

                let mut dns_header = DnsHeader::new();
                
                // Parse the received DNS header
                dns_header.id = BigEndian::read_u16(&buf[0..2]);
                let flags = BigEndian::read_u16(&buf[2..4]);
                dns_header.mimic_flags(flags);
                
                let dns_question = DNSQuestion::new();
                let resource_record = ResourceRecord::new();

                let mut response = dns_header.to_bytes();
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
