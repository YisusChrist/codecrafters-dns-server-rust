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
