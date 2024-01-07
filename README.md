[![progress-banner](https://backend.codecrafters.io/progress/dns-server/7dba6e22-3d51-47c3-9bb4-1f8ac3e3dee0)](https://app.codecrafters.io/users/codecrafters-bot?r=2qF)

This is a starting point for Rust solutions to the
["Build Your Own DNS server" Challenge](https://app.codecrafters.io/courses/dns-server/overview).

In this challenge, you'll build a DNS server that's capable of parsing and
creating DNS packets, responding to DNS queries, handling various record types
and doing recursive resolve. Along the way we'll learn about the DNS protocol,
DNS packet format, root servers, authoritative servers, forwarding servers,
various record types (A, AAAA, CNAME, etc) and more.

**Note**: If you're viewing this repo on GitHub, head over to
[codecrafters.io](https://codecrafters.io) to try the challenge.

- [Introduction](#introduction)
- [Repository Setup](#repository-setup)
- [Passing the first stage](#passing-the-first-stage)
- [Stage 2 \& beyond](#stage-2--beyond)
- [Functionalities implemented for each stage](#functionalities-implemented-for-each-stage)
  - [Stage 1: Setup UDP server](#stage-1-setup-udp-server)
  - [Stage 2: Write header section](#stage-2-write-header-section)
    - [Header section structure](#header-section-structure)
    - [Rust Guide (Beta)](#rust-guide-beta)
  - [Stage 3: Write question section](#stage-3-write-question-section)
    - [Question section structure](#question-section-structure)
    - [Domain name encoding](#domain-name-encoding)
    - [Rust Guide (Beta)](#rust-guide-beta-1)
  - [Stage 4: Write answer section](#stage-4-write-answer-section)
    - [Answer section structure](#answer-section-structure)
    - [Rust Guide (Beta)](#rust-guide-beta-2)
  - [Stage 5: Parse header section](#stage-5-parse-header-section)
    - [Rust Guide (Beta)](#rust-guide-beta-3)
  - [Stage 6: Parse question section](#stage-6-parse-question-section)
    - [Rust Guide (Beta)](#rust-guide-beta-4)
      - [Parsing the Question Section](#parsing-the-question-section)
      - [Building the Response](#building-the-response)
      - [The Question Section](#the-question-section)
      - [The Answer Section](#the-answer-section)
  - [Stage 7: Parse compressed packet](#stage-7-parse-compressed-packet)
    - [Rust Guide (Beta)](#rust-guide-beta-5)
  - [Stage 8: Forwarding Server](#stage-8-forwarding-server)
    - [Rust Guide (Beta)](#rust-guide-beta-6)

# Introduction

Welcome to the Build your own DNS server challenge!

In this challenge, you'll build a DNS server that's capable of parsing and creating DNS packets, responding to DNS queries, handling various record types and doing recursive resolve. Along the way we'll learn about the DNS protocol, DNS packet format, root servers, authoritative servers, forwarding servers, various record types (A, AAAA, CNAME, etc) and more.

# Repository Setup

We've prepared a starter repository with some Rust code for you.

<span style="color:lightgreen">Step 1:</span> Clone the repository.

```sh
git clone https://git.codecrafters.io/a7430bf645d0c9c1 codecrafters-dns-server-rust && cd codecrafters-dns-server-rust
```

<span style="color:lightgreen">Step 2:</span> Push an empty commit.

```sh
git commit --allow-empty -m 'test' && git push origin master
```

# Passing the first stage

The entry point for your `your_server.sh` implementation is in `src/main.rs`.
Study and uncomment the relevant code, and push your changes to pass the first
stage:

```sh
git add .
git commit -m "pass 1st stage" # any msg
git push origin master
```

Time to move on to the next stage!

# Stage 2 & beyond

Note: This section is for stages 2 and beyond.

1. Ensure you have `cargo (1.70)` installed locally
1. Run `./your_server.sh` to run your program, which is implemented in
   `src/main.rs`. This command compiles your Rust project, so it might be slow
   the first time you run it. Subsequent runs will be fast.
1. Commit your changes and run `git push origin master` to submit your solution
   to CodeCrafters. Test output will be streamed to your terminal.

# Functionalities implemented for each stage

Here are the functionalities that you'll need to implement for each stage:

## Stage 1: Setup UDP server

In this stage, we'll setup a UDP server that can receive and respond to UDP packets on port 2053.

The tester will execute your program like this:

```sh
./your_server.sh
```

The tester will then send a UDP packet to port 2053.

Your program should respond back with a UDP packet. It's okay to ignore the contents of the packet for now, we'll work on that in the next stage.

## Stage 2: Write header section

All communications in the DNS protocol are carried in a single format called a "message". Each message consists of 5 sections: header, question, answer, authority, and an additional space.

In this stage, we'll focus on the "header" section. We'll look at the other sections in later stages.

### Header section structure

The header section of a DNS message contains the following fields: (we've also included the values that the tester expects in this stage)

| **Field**                         | **Size** | **Description**                                                                                                |
| --------------------------------- | -------- | -------------------------------------------------------------------------------------------------------------- |
| Packet Identifier (ID)            | 16 bits  | A random ID assigned to query packets. Response packets must reply with the same ID. **Expected value**: 1234. |
| Query/Response Indicator (QR)     | 1 bit    | 1 for a reply packet, 0 for a question packet. **Expected value**: 1.                                          |
| Operation Code (OPCODE)           | 4 bits   | Specifies the kind of query in a message.**Expected value**: 0.                                                |
| Authoritative Answer (AA)         | 1 bit    | 1 if the responding server "owns" the domain queried, i.e., it's authoritative. **Expected value**: 0.         |
| Truncation (TC)                   | 1 bit    | 1 if the message is larger than 512 bytes. Always 0 in UDP responses. **Expected value**: 0.                   |
| Recursion Desired (RD)            | 1 bit    | Sender sets this to 1 if the server should recursively resolve this query, 0 otherwise. **Expected value**: 0. |
| Recursion Available (RA)          | 1 bit    | Server sets this to 1 to indicate that recursion is available. **Expected value**: 0.                          |
| Reserved (Z)                      | 3 bits   | Used by DNSSEC queries. At inception, it was reserved for future use. **Expected value**: 0.                   |
| Response Code (RCODE)             | 4 bits   | Response code indicating the status of the response. **Expected value**: 0 (no error).                         |
| Question Count (QDCOUNT)          | 16 bits  | Number of questions in the Question section. **Expected value**: 0.                                            |
| Answer Record Count (ANCOUNT)     | 16 bits  | Number of records in the Answer section. **Expected value**: 0.                                                |
| Authority Record Count (NSCOUNT)  | 16 bits  | Number of records in the Authority section. **Expected value**: 0.                                             |
| Additional Record Count (ARCOUNT) | 16 bits  | Number of records in the Additional section. **Expected value**: 0.                                            |

The header section is always 12 bytes long. Integers are encoded in big-endian format.

You can read more about the full DNS packet format on [Wikipedia](https://en.wikipedia.org/wiki/Domain_Name_System#DNS_message_format), or in [RFC 1035](https://tools.ietf.org/html/rfc1035#section-4.1). [This link](https://github.com/EmilHernvall/dnsguide/blob/b52da3b32b27c81e5c6729ac14fe01fef8b1b593/chapter1.md) is a good tutorial that walks through the DNS packet format in detail.

---

Just like in the previous stage, the tester will execute your program like this:

```sh
./your_server.sh
```

It'll then send a UDP packet (containing a DNS query) to port 2053. Your program will need to respond with a DNS reply packet that contains the header information described above.

We recommend creating an internal structure for a "DNS message" in your code, as we will build on this in later stages.

---

### Rust Guide (Beta)

In this stage, you'll work on creating the header section of a DNS packet. The DNS packet's header contains various flags and counts which need to be configured as per the requirements given.

One effective approach to storing and manipulating the DNS packet header fields is to first define a struct that represents the header format. Here's an example struct:

```rust
pub struct DNSHeader {
    id: u16,
    qr: u8,
    opcode:u8,
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
```

The integer types ([u8](https://doc.rust-lang.org/std/primitive.u8.html), [u16](https://doc.rust-lang.org/std/primitive.u16.html), etc) indicate the size of each field. Observe that we've done the conversion from bits to bytes. To store bit fields like "Query/Response Indicator (QR)" which range in size from 1 to 4 bits, you can use the [u8](https://doc.rust-lang.org/std/primitive.u8.html) integer type.

To write this information into a binary format, Rust provides conversion functions like [to_be_bytes()](https://doc.rust-lang.org/std/primitive.u16.html#method.to_be_bytes) that will output a big-endian array. You can write these bytes to a byte buffer:

```rust
let id_bytes = header.id.to_be_bytes();
buffer.extend_from_slice(&id_bytes);
```

Do note that DNS packet uses a big-endian format, so you will utilize the above-mentioned function to make sure the output is converted into the right format.

Lastly, pay attention to the fact that some of the fields in the header are not a full byte, but rather take up a bit within a byte. This can be handled by using bitwise operations in Rust.

For instance, you might take `qr`, `opcode`, and `aa` and pack them into a single byte:

```rust
let byte1 = (header.qr << 7) | (header.opcode << 3) | (header.aa);
```

This forms the basis of the task. Continue in a similar fashion to serialize the rest of the header fields into the byte buffer. If you feel that you need more help, feel free to look at "Code Examples" for additional guidance. Remember, this is a process of learning and experimentation.

## Stage 3: Write question section

In this stage, you'll extend your DNS server to respond with the "question" section, the second section of a DNS message.

### Question section structure

The question section contains a list of questions (usually just 1) that the sender wants to ask the receiver. This section is present in both query and reply packets.

Each question has the following structure:

- **Name**: A domain name, represented as a sequence of "labels" (more on this below)
- **Type**: 2-byte int; the type of record (1 for an A record, 5 for a CNAME record etc., full list [here](https://www.rfc-editor.org/rfc/rfc1035#section-3.2.2))
- **Class**: 2-byte int; usually set to 1 (full list [here](https://www.rfc-editor.org/rfc/rfc1035#section-3.2.4))

[Section 4.1.2](https://www.rfc-editor.org/rfc/rfc1035#section-4.1.2) of the RFC covers the question section format in detail. [Section 3.2](https://www.rfc-editor.org/rfc/rfc1035#section-3.2) has more details on Type and class.

### Domain name encoding

Domain names in DNS packets are encoded as a sequence of labels.

Labels are encoded as `<length><content>`, where `<length>` is a single byte that specifies the length of the label, and `<content>` is the actual content of the label. The sequence of labels is terminated by a null byte (`\x00`).

For example:

- `google.com` is encoded as `\x06google\x03com\x00` (in hex: `06 67 6f 6f 67 6c 65 03 63 6f 6d 00`)
  - `\x06google` is the first label
    - `\x06` is a single byte, which is the length of the label
    - `google` is the content of the label
  - `\x03com` is the second label
    - `\x03` is a single byte, which is the length of the label
    - `com` is the content of the label
  - `\x00` is the null byte that terminates the domain name

---

Just like in the previous stage, the tester will execute your program like this:

```sh
./your_server.sh
```

It'll then send a UDP packet (containing a DNS query) to port 2053. Your program will need to respond with a DNS reply packet that contains the question section described above (along with the header section from the previous stage).

Here are the expected values for the question section:

| **Field** | **Expected value**                                                                                      |
| --------- | ------------------------------------------------------------------------------------------------------- |
| Name      | `\x0ccodecrafters\x02io` followed by a null byte (that's `codecrafters.io` encoded as a label sequence) |
| Type      | 1 encoded as a 2-byte big-endian int (corresponding to the "A" record type)                             |
| Class     | 1 encoded as a 2-byte big-endian int (corresponding to the "IN" record class)                           |

Make sure to update the `QDCOUNT` field in the header section accordingly, and remember to set the id to `1234`.

---

### Rust Guide (Beta)

In this stage, we are going to build upon the DNS server that we've started building in the earlier stages. We will be expanding the DNS response to include the "question" section carrying the queried domain name, query type, and class.

Let's get started by defining the structure of the question in Rust:

```rust
struct DNSQuestion {
    domain_name: String,
    query_type: u16,
    query_class: u16,
}
```

Rust's [From](https://doc.rust-lang.org/std/convert/trait.From.html) trait can be implemented to convert the domain name string to encoded label format as described in the instructions. Remember that it must end with a null byte (`\0`).

```rust
impl From<&str> for &[u8] {
fn from(domain: &str) -> Self { ... }
}
```

Next, we need to build the "question" section by encoding the `domain_name`, `query_type` and `query_class` in order.

To do that, we will define a method to convert a `DNSQuestion` into a byte vector:

```rust
impl DNSQuestion {
   fn to_bytes(&self) -> Vec<u8> {
      let mut bytes = Vec::new();
      ...
      bytes
   }
}
```

Start by pushing the encoded `domain_name` to our byte vector, use the [extend_from_slice](https://doc.rust-lang.org/std/vec/struct.Vec.html#method.extend_from_slice) method from `Vec`, which copies elements from a slice into the vector.

```rust
bytes.extend_from_slice(&self.domain_name.as_encoded_label[]);
```

After encoding the domain name, convert `query_type` and `query_class` to a big endian representation using the [to_be_bytes](https://doc.rust-lang.org/std/primitive.u16.html#method.to_be_bytes) function and append them to the vector. This function returns an array which can be appended much like how we appended the `domain_name`:

```rust
bytes.extend_from_slice(&self.query_type.to_be_bytes());
bytes.extend_from_slice(&self.query_class.to_be_bytes());
```

This will complete the encoding of our "question" section.

We are now ready to send the DNS response. Just like in the previous stage, the "question" section bytes should be appended to the "header" section bytes before sending.

Finally, don't forget to update `QDCOUNT` field (Question Count) in the header section!

As always, if something doesn't work as expected, take a look at your error messages and try to decipher them. Rust's error messages are usually quite helpful. If you need an extra push, you can examine the "Code Examples" provided for more insights.

## Stage 4: Write answer section

In this stage, you'll extend your DNS server to respond with the "answer" section, the third section of a DNS message.

### Answer section structure

The answer section contains a list of RRs (Resource Records), which are answers to the questions asked in the question section.

Each RR has the following structure:

| **Field**           | **Type**       | **Description**                                                                                                          |
| ------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Name                | Label Sequence | The domain name encoded as a sequence of labels.                                                                         |
| Type                | 2-byte Integer | `1` for an A record, `5` for a CNAME record etc., full list [here](https://www.rfc-editor.org/rfc/rfc1035#section-3.2.2) |
| Class               | 2-byte Integer | Usually set to `1` (full list [here](https://www.rfc-editor.org/rfc/rfc1035#section-3.2.4))                              |
| TTL (Time-To-Live)  | 4-byte Integer | The duration in seconds a record can be cached before requerying.                                                        |
| Length (`RDLENGTH`) | 2-byte Integer | Length of the RDATA field in bytes.                                                                                      |
| Data (`RDATA`)      | Variable       | Data specific to the record type.                                                                                        |

[Section 3.2.1](https://www.rfc-editor.org/rfc/rfc1035#section-3.2.1) of the RFC covers the answer section format in detail.

In this stage, we'll only deal with the "A" record type, which maps a domain name to an IPv4 address. The RDATA field for an "A" record type is a 4-byte integer representing the IPv4 address.

---

Just like in the previous stage, the tester will execute your program like this:

```sh
./your_server.sh
```

It'll then send a UDP packet (containing a DNS query) to port 2053.

Your program will need to respond with a DNS reply packet that contains:

- a header section (same as in [stage \#2](#stage-2-write-header-section))
- a question section (same as in [stage \#3](#stage-3-write-question-section))
- an answer section (**new in this stage!**)
  Your answer section should contain a single RR, with the following values:

| **Field** | **Expected Value**                                                                                                                 |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| Name      | `\x0ccodecrafters\x02io` followed by a null byte (that's `codecrafters.io` encoded as a label sequence)                            |
| Type      | `1` encoded as a 2-byte big-endian int (corresponding to the "A" record type)                                                      |
| Class     | `1` encoded as a 2-byte big-endian int (corresponding to the "IN" record class)                                                    |
| TTL       | Any value, encoded as a 4-byte big-endian int. For example: `60`.                                                                  |
| Length    | `4`, encoded as a 2-byte big-endian int (corresponds to the length of the RDATA field)                                             |
| Data      | Any IP address, encoded as a 4-byte big-endian int. For example: `\x08\x08\x08\x08` (that's `8.8.8.8` encoded as a 4-byte integer) |

Make sure to update the `ANCOUNT` field in the header section accordingly, and remember to set the id to `1234`.

---

### Rust Guide (Beta)

In this stage, you'll focus on extending your DNS server by adding the ability to respond with the "answer" section of a DNS message.

The answer section consists of a list of Resource Records (RR). Each RR is a struct that consists of a [Name](https://doc.rust-lang.org/std/string/struct.String.html), [Type](https://doc.rust-lang.org/std/any/type_id/struct.TypeId.html), [Class](https://doc.rust-lang.org/std/any/type_id/struct.TypeId.html), [TTL](https://doc.rust-lang.org/std/time/struct.Instant.html) (Time To Live), [RDLENGTH](https://doc.rust-lang.org/std/primitive.usize.html) (Length), and [RDATA](https://doc.rust-lang.org/std/vec/struct.Vec.html) (Data).

With Rust, you will define these attributes in your struct in the following way:

```rust
struct ResourceRecord {
    name: Vec<u8>,
    type: u16,
    class: u16,
    ttl: u32,
    rdlength: u16,
    rdata: Vec<u8>,
}
```

Based on the instructions, the name should be the same as in the 'Question' section. You can reuse the same function for converting the domain name to the label sequence in Rust. For class and type, treat them as 2 bytes integers directly without conversion, and for the TTL field, you may select any value and convert it to [Big-endian](https://doc.rust-lang.org/std/primitive.u32.html#method.to_be) as instructed.

The RDATA field differs per type, for instance for the "A" record type you need to convert an IP address to a 4-byte integer.

```rust
fn ipv4_to_bytes(ip: Ipv4Addr) -> Vec<u8> {
    let octets = ip.octets();
    octets.to_vec()
}
```

Ensure to update the ANCOUNT (Answer count) field in the header section accordingly. You can do this using:

```rust
let ancount = answer_section.len() as u16;
let ancount_bytes = ancount.to_be_bytes();
```

Remember to write tests for your new functions, to ensure they behave as expected.

As usual, remember that Rust favors explicit error handling. Make good use of the [Result](https://doc.rust-lang.org/std/result/enum.Result.html) type as you did in the previous sections, to handle any possible errors that may come through in the processing of the DNS response.

If you ever find yourself stuck, don't hesitate to look at the "Code Examples" on the platform. They can provide additional context and help you understand how to approach the problem. Happy coding!

## Stage 5: Parse header section

Up until now, we were ignoring the contents of the DNS packet that we received and hardcoding `1234` as the ID in the response. In this stage, you'll have to parse the DNS packet that you receive and respond with the same ID in the response. You'll also need to set some other fields in the header section.

Just like the previous stage, the tester will execute your program like this:

```sh
./your_server.sh
```

It'll then send a UDP packet (containing a DNS query) to port 2053.

Your program will need to respond with a DNS reply packet that contains a header section with the following values:

| **Field**                         | **Size** | **Expected value**                                                        |
| --------------------------------- | -------- | ------------------------------------------------------------------------- |
| Packet Identifier (ID)            | 16 bits  | Mimic the 16 bit packet identifier from the request packet sent by tester |
| Query/Response Indicator (QR)     | 1 bit    | 1                                                                         |
| Operation Code (OPCODE)           | 4 bits   | Mimic the OPCODE value sent by the tester                                 |
| Authoritative Answer (AA)         | 1 bit    | 0                                                                         |
| Truncation (TC)                   | 1 bit    | 0                                                                         |
| Recursion Desired (RD)            | 1 bit    | Mimic the RD value sent by the tester                                     |
| Recursion Available (RA)          | 1 bit    | 0                                                                         |
| Reserved (Z)                      | 3 bits   | 0                                                                         |
| Response Code (RCODE)             | 4 bits   | 0 (no error) if OPCODE is 0 (standard query) else 4 (not implemented)     |
| Question Count (QDCOUNT)          | 16 bits  | Any valid value                                                           |
| Answer Record Count (ANCOUNT)     | 16 bits  | Any valid value                                                           |
| Authority Record Count (NSCOUNT)  | 16 bits  | Any valid value                                                           |
| Additional Record Count (ARCOUNT) | 16 bits  | Any valid value                                                           |

The tester will not check what follows the header section as long as it is a valid DNS packet.

---

### Rust Guide (Beta)

In this stage, you'll be parsing the header of the DNS packet received by your server, and mimicking some of the fields within it in your response.

You will be dealing with bit-level manipulations in Rust to implement this stage. The first step will be to define a struct for the DNS header and fill it up with the received data from the UDP packet. See the example below:

```rust
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
```

Here, we are using the `repr(C, packed)` attribute to ensure that Rust does not add any padding bytes between the fields, which is crucial because we're going to be reading this data directly from the incoming byte stream.

You can use the `byteorder` crate to help read these binary values in network byte order (big-endian). Here's how you could read a packet:

```rust
use byteorder::{ByteOrder, BigEndian};

// Receive packet data from socket...

let header = unsafe {
    let mut buffer: DnsHeader = std::mem::zeroed();
    let header_bytes = std::slice::from_raw_parts_mut(&mut buffer as *mut _ as *mut u8, std::mem::size_of::<DnsHeader>());
    header_bytes.copy_from_slice(&packet_data[0..12]);

    buffer.id = BigEndian::read_u16(&header_bytes[0..2]);
    buffer.flags = BigEndian::read_u16(&header_bytes[2..4]);
    buffer.qdcount = BigEndian::read_u16(&header_bytes[4..6]);
    buffer.ancount = BigEndian::read_u16(&header_bytes[6..8]);
    buffer.nscount = BigEndian::read_u16(&header_bytes[8..10]);
    buffer.arcount = BigEndian::read_u16(&header_bytes[10..12]);

    buffer
};
```

To manipulate the `flags` field and change bits according to instructions, you will have to work with bitwise operators. For example, you can set the Query/Response Indicator (QR) bit to `1` like this:

```rust
header.flags |= 0b1000_0000_0000_0000;
```

Similar techniques can be employed to mask and set other requisite bits. Once you've created and manipulated the header, you can send it back.

I strongly encourage you to go through the "Functionality" part of the `byteorder` crate's documentation to understand how it can be used effectively. It provides a detailed view to handle different data types effectively.

Remember, for any additional help or code samples, you can always take a look at the platform's "Code Examples" section. Keep going!

## Stage 6: Parse question section

In this stage you'll extend your DNS server to parse the question section of the DNS message you receive.

Just like the previous stage, the tester will execute your program like this:

```sh
./your_server.sh
```

It'll then send a UDP packet (containing a DNS query) to port 2053 that contains a question section as follows:

| **Field** | **Value sent by the tester**                                                                                    |
| --------- | --------------------------------------------------------------------------------------------------------------- |
| Name      | A random domain encoded as a label sequence (refer to [stage \#3](#stage-3-write-question-section) for details) |
| Type      | `1` encoded as a 2-byte big-endian int (corresponding to the "A" record type)                                   |
| Class     | `1` encoded as a 2-byte big-endian int (corresponding to the "IN" record class)                                 |

The question type will always be `A` for this stage and the question class will always be `IN`. So your parser only needs to account for those record types for now.

Your program will need to respond with a DNS reply packet that contains:

- a header section (same as in [stage \#5](#stage-5-parse-header-section))
- a question section (**new in this stage**)
- an answer section (**new in this stage**)

**Expected values for the question section:**

| **Field** | **Expected value**                                                              |
| --------- | ------------------------------------------------------------------------------- |
| Name      | Mimic the domain name (as label sequence)                                       |
| Type      | `1` encoded as a 2-byte big-endian int (corresponding to the "A" record type)   |
| Class     | `1` encoded as a 2-byte big-endian int (corresponding to the "IN" record class) |

**Expected values for the answer section:**

| **Field** | **Expected Value**                                                                                                                 |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| Name      | Mimic the domain name (as label sequence)                                                                                          |
| Type      | `1` encoded as a 2-byte big-endian int (corresponding to the "A" record type)                                                      |
| Class     | `1` encoded as a 2-byte big-endian int (corresponding to the "IN" record class)                                                    |
| TTL       | Any value, encoded as a 4-byte big-endian int. For example: `60`.                                                                  |
| Length    | `4`, encoded as a 2-byte big-endian int (corresponds to the length of the RDATA field)                                             |
| Data      | Any IP address, encoded as a 4-byte big-endian int. For example: `\x08\x08\x08\x08` (that's `8.8.8.8` encoded as a 4-byte integer) |

---

### Rust Guide (Beta)

In this stage, you will extend your DNS server to parse the question section of the DNS message you receive and return a DNS response packet with header, question, and answer sections filled.

Let's break this down:

#### Parsing the Question Section

You will need to parse the incoming UDP packet and extract the question section which contains the "Name", "Type", and "Class" fields. The method used to parse the DNS packet in the previous stage can be expanded to include these fields, storing them in variables for later use.

The "Name" field is a domain name, encoded as a label sequence. This sequence will be a series of length-prefixed labels, with "." replaced by "0".

The "Type" and "Class" fields can be read as an unsigned 16-bit value, with Rust's [read_u16](https://doc.rust-lang.org/std/io/trait.Read.html#method.read_u16) method. Just remember that the values are big-endian so we should use `read_u16::<BigEndian>()`.

#### Building the Response

Formulating the response involves generating three sections: header, question, and answer. You've already implemented the header in the previous stage, so let's look at the other two.

#### The Question Section

Start by reassembling the "Name" field as it was in the incoming DNS packet. The "Type" and "Class" fields will be `1`, encoded as a 2-byte big endian int, just as they were in the query.

#### The Answer Section

Like with the question section, reconstruct the "Name" field. The "Type" and "Class" will be `1` and `1` respectively, just like in the question section. Given the "TTL" and "Data" can be any valid values, you might choose to hardcode them for simplicity. "Length" will be `4` to match the length of the IP address in the "Data" field.

For writing multi-byte integers as big-endian, make use of the `write_u16::<BigEndian>` and `write_u32::<BigEndian>` functions from the [BytesOrder crate](https://docs.rs/byteorder/1.4.3/byteorder/) in your response.

Remember to follow Rust best practices when building the response and handling potential errors.

Lastly, don't forget to ask for help, when needed. Review "Code Examples" for further assistance and continue programming with patience and perseverance!

## Stage 7: Parse compressed packet

In this stage we will parse the DNS question section which has compressed the question label sequences. You will be sent multiple values in the question section and you have to parse the queries and respond with the same question section in the response along with answers for them. As for the answer section, respond with an `A` record type which can take any value of your choosing for each question. You don't need to compress your response. We will never ask you to do something that will overflow the buffer size restriction of UDP, so compressing your response packet is not something you have to worry about.

The question type will always be `A` and the question class will always be `IN`.

[This section](https://www.rfc-editor.org/rfc/rfc1035#section-4.1.4) of the RFC covers how this compression works.

---

### Rust Guide (Beta)

In this stage, you'll be building on your existing knowledge to parse the DNS question section which has compressed the question label sequences. As the first step, we'll learn how to parse the compressed label.

In short, DNS message compression helps to carry the same information in fewer bytes, which is critical given DNS limits packet size. When names or sequences are repeated within a DNS message, we can simply begin the second instance with a pointer to the first.

You would approach this in Rust by having a [function](https://doc.rust-lang.org/std/keyword.fn.html) to parse a compressed sequence. You'll have to use byte manipulation to decompress the bytes as explained in the given RFC section. One way to approach this would be to read the bytes starting from the first. The first two bits signify if the name is compressed or not. If it is compressed, the rest of the byte along with the next byte form a pointer to another part of the message where the rest of the name is stored. If it's not compressed, then the byte signifies the length of the following segment of the name, and you can proceed to read that many bytes.

For handling pointers in Rust, you can create a [stack](https://doc.rust-lang.org/std/collections/struct.Vec.html) of the positions that you have to return to after handling the compression.

Here is a high level implementation strategy:

1. Initialize an empty string to hold the domain name and a stack to keep track of positions to return to.
2. Read the first byte to check if it's a pointer or a label having DNS name.
3. If it's a pointer, [push](https://doc.rust-lang.org/std/vec/struct.Vec.html#method.push) the next position onto the stack and jump to the position pointed by the current byte.
4. If it's a label, read the specified number of bytes, [append](https://doc.rust-lang.org/std/string/struct.String.html#method.push_str) them to your result string, and move to the next position.
5. At the end of a label (denoted by a byte `0x00`), if there's a position in the stack, [pop](https://doc.rust-lang.org/std/vec/struct.Vec.html#method.pop) it and jump back to that position.
6. End reading when you hit the end of a label sequence (i.e., a byte `0x00`) and there's no position in the stack to return to.

As a tip, consider Rust's byteorder crate (rust-byteorder) which provides utilities to help you convert bytes to integers of desired length and ordering.

As for the response, you won't need to worry about compressing - you can respond with full domain names.

Remember, don't hesitate to look into "Code Examples" if you need extra help in understanding these concepts. That's what they are there for!

## Stage 8: Forwarding Server

In this stage, you will implement a forwarding DNS server.

A forwarding DNS server, also known as a DNS forwarder, is a DNS server that is configured to pass DNS queries it receives from clients to another DNS server for resolution. Instead of directly resolving DNS queries by looking up the information in its own local cache or authoritative records.

---

In this stage the tester will execute your program like this:

```
./your_server --resolver <address>

```

- where `<address>` will be of the form `<ip>:<port>`

It'll then send a UDP packet (containing a DNS query) to port 2053. Your program will be responsible for forwarding DNS queries to a specified DNS server, and then returning the response to the original requester (i.e. the tester).

Your program will need to respond with a DNS reply packet that contains:

- a header section (same as in [stage \#5](#stage-5-parse-header-section))
- a question section (same as in [stage \#6](#stage-6-parse-question-section))
- an answer section (new in this stage) mimicking what you received from the DNS server to which you forwarded the request.

Here are a few assumptions you can make about the tester:

- It will always send you queries for `A` record type. So your parsing logic only needs to take care of this.

Here are few assumptions you can make about the DNS server you are forwarding the requests to:

- It will always respond with an answer section for the queries that originate from the tester.
- It will not contain other sections like (authority section and additional section)
- It will only respond when there is only one question in the question section. If you send multiple questions in the question section, it will not respond at all. So when you receive multiple questions in the question section you will need to split it into two DNS packets and then send them to this resolver then merge the response in a single packet.

Remember to mimic the packet identifier value sent by the tester in your response.

---

### Rust Guide (Beta)

In this stage, you will implement a DNS forwarding server in Rust. To make this easier, I suggest breaking this into four main tasks:

1. **Split multiple DNS queries into separate packets**: You will need to create logic to identify when there is more than one DNS query in the incoming packet. You could leverage a separate function to handle this, splitting the queries and returning them as distinct DNS query packets. The [`Vec<T>`](https://doc.rust-lang.org/std/vec/struct.Vec.html) structure can be useful here to create a dynamic collection of query packets.

2. **Send DNS queries to specified DNS server**: You need to forward DNS queries to the DNS server specified by the tester. You can use the [`std::net::UdpSocket`](https://doc.rust-lang.org/std/net/struct.UdpSocket.html) library for this purpose. Use [`UdpSocket::bind()`](https://doc.rust-lang.org/std/net/struct.UdpSocket.html#method.bind) to create a socket, then [`UdpSocket::send_to()`](https://doc.rust-lang.org/std/net/struct.UdpSocket.html#method.send_to) to send your query packets to the targeted server. Be noting the `<ip>:<port>` format when dealing with socket addresses.

3. **Receive and process reply from DNS server**: After sending the queries, you'll listen for responses using [`UdpSocket::recv_from()`](https://doc.rust-lang.org/std/net/struct.UdpSocket.html#method.recv_from). Once received, you may want to parse the response into a data structure for easier manipulation.

4. **Respond to original request with DNS reply packet**: Once you have your processed responses, you'll need to format them into the proper response structure and send it back to the tester using [`UdpSocket::send_to()`](https://doc.rust-lang.org/std/net/struct.UdpSocket.html#method.send_to) again.

Rust tip: Rust's [`Result`](https://doc.rust-lang.org/std/result/enum.Result.html) enum is useful here, as each of these methods can return a Result type. Make sure to incorporate error handling into your code by using Result's [`Ok`](https://doc.rust-lang.org/std/result/enum.Result.html#variant.Ok) and [`Err`](https://doc.rust-lang.org/std/result/enum.Result.html#variant.Err) variants.

Also, remember to manipulate the packet identifiers to mimic the ones sent by the tester. You can use byte order conversion methods, since network packets are sent in big-endian format, whereas your local machine may read in little-endian.

This stage is definitely tricky, but I am confident with your current foundational knowledge, you can tackle this. If you need more help with Rust-syntax or approach, don't hesitate to refer to the "Code Examples" section on your platform. Keep going!
