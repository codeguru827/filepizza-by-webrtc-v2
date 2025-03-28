# filepizza-by-webrtc-v2

> FilePizza service by WebRTC - v2

- Using `WebRTC`, **FilePizza** eliminates the initial upload step required by other web-based file sharing services.

- Because data is never stored in an intermediary server, the transfer is fast, private, and secure.

## Prerequisites

```yaml
node.js: 22.14.0
npm: 10.9.2
pnpm: 10.7.0
```

Install `pnpm`:

```bash
$ npm i -g pnpm
```

```yaml
# Stack
Next.js: ^15.1.3
React: ^19.0.0
Typescript: ^5.0.0
TailwindCSS: ^3.4.10
PeerJS for WebRTC: ^1.5.4
ioredis for Redis: ^5.4.2
```

Install `Redis` by referring this [tutorial](https://www.digitalocean.com/community/tutorials/how-to-install-and-secure-redis-on-ubuntu-22-04)

Install `Docker` by referring this [tutorial](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-22-04)

## Getting Started

```bash
# Development
$ git clone https://github.com/codeguru827/filepizza-by-webrtc-v2.git
$ pnpm install
$ pnpm dev
## visit http://localhost:3000/

$ pnpm build
$ pnpm start

# Running with Docker (optional)
$ pnpm docker:build
$ pnpm docker:up
$ pnpm docker:down
```

## What's New in v2

- A new UI with dark mode support, now built on modern browser technologies.
- Works on most mobile browsers, including Mobile Safari.
- Transfers are now directly from the uploader to the downloader's browser (**WebRTC without WebTorrent**) with faster handshakes.
- Uploaders can monitor the progress of the transfer and stop it if they want.
- Better security and safety measures with password protection and reporting.
- Support for uploading multiple files at once, which downloaders receive as a zip file.
- Streaming downloads with a Service Worker.
- Out-of-process storage of server state using Redis.

## FAQ

**How are my files sent?**

> Your files are sent directly from your browser to the downloader's browser. They never pass through our servers. FilePizza uses WebRTC to send files. This requires that the uploader leave their browser window open until the transfer is complete.

**Can multiple people download my file at once?**

> Yes! Just send them your short or long URL.

**How big can my files be?**

> As big as your browser can handle.

**What happens when I close my browser?**

> The URLs for your files will no longer work. If a downloader has completed the transfer, that downloader will continue to seed to incomplete downloaders, but no new downloads may be initiated.

**Are my files encrypted?**

> Yes, all WebRTC communications are automatically encrypted using public-key cryptography because of DTLS. You can add an optional password to your upload for an extra layer of security.

---

&copy; 2025 @codeguru, All rights reserved
