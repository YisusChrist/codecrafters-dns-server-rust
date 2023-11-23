use std::net::UdpSocket;

// Connect to DNS server on http://127.0.0.1:2053

const SERVER_PORT: &str = "2053";
const SERVER_ADDRESS: &str = "127.0.0.1";
const PACKET_IDENTIFIER: u16 = 1234;

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
    fn new() -> DnsHeader {
        DnsHeader {
            id: PACKET_IDENTIFIER,
            qr: 1,
            opcode: 0,
            aa: 0,
            tc: 0,
            rd: 0,
            ra: 0,
            z: 0,
            rcode: 0,
            qdcount: 0,
            ancount: 0,
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
    domain_name: Vec<String>,
    query_type: u16,
    query_class: u16,
}

impl DNSQuestion {
    fn new() -> DNSQuestion {
        DNSQuestion {
            domain_name: vec!["codecrafters".to_string(), "io".to_string()],
            query_type: 1,  // A record type
            query_class: 1, // IN record class
        }
    }
    fn to_bytes(&self) -> Vec<u8> {
        let mut bytes = Vec::new();
        for label in self.domain_name.as_slice() {
            bytes.push(label.len() as u8);
            bytes.extend_from_slice(label.as_bytes());
        }
        bytes.push(b'\0'); // Null terminator
        bytes.extend_from_slice(&self.query_type.to_be_bytes());
        bytes.extend_from_slice(&self.query_class.to_be_bytes());
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

                let dns_header = DnsHeader::new();
                let dns_question = DNSQuestion::new();

                let mut response = dns_header.to_bytes();
                response.extend_from_slice(&dns_question.to_bytes());

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
