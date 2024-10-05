# Resend Node.js SDK

Node.js library for the Resend API.

## Install

```bash
npm install resend
# or
yarn add resend
```

## Examples

Send email with:

- [Node.js](https://github.com/resendlabs/resend-node-example)
- [Next.js (App Router)](https://github.com/resendlabs/resend-nextjs-app-router-example)
- [Next.js (Pages Router)](https://github.com/resendlabs/resend-nextjs-pages-router-example)
- [Express](https://github.com/resendlabs/resend-express-example)

## Setup

First, you need to get an API key, which is available in the [Resend Dashboard](https://resend.com).

```js
import { Resend } from 'resend';
const resend = new Resend('re_123456789');
```

## Usage

Send your first email:

```js
await resend.emails.send({
  from: 'you@example.com',
  to: 'user@gmail.com',
  replyTo: 'you@example.com',
  subject: 'hello world',
  text: 'it works!',
});
```

## Send email using HTML

Send an email custom HTML content:

```js
await resend.emails.send({
  from: 'you@example.com',
  to: 'user@gmail.com',
  replyTo: 'you@example.com',
  subject: 'hello world',
  html: '<strong>it works!</strong>',
});
```

## License

MIT License
