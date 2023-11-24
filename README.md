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

./your_server.sh
It'll then send a UDP packet (containing a DNS query) to port 2053.

Your program will need to respond with a DNS reply packet that contains:

a header section (same as in stage #2)
a question section (same as in stage #3)
an answer section (new in this stage!)
Your answer section should contain a single RR, with the following values:

Field Expected Value
Name \x0ccodecrafters\x02io followed by a null byte (that's codecrafters.io encoded as a label sequence)
Type 1 encoded as a 2-byte big-endian int (corresponding to the "A" record type)
Class 1 encoded as a 2-byte big-endian int (corresponding to the "IN" record class)
TTL Any value, encoded as a 4-byte big-endian int. For example: 60.
Length 4, encoded as a 2-byte big-endian int (corresponds to the length of the RDATA field)
Data Any IP address, encoded as a 4-byte big-endian int. For example: \x08\x08\x08\x08 (that's 8.8.8.8 encoded as a 4-byte integer)
Make sure to update the ANCOUNT field in the header section accordingly, and remember to set the id to 1234.
