# 🎨 Inpainter

A web GUI for inpainting with [Ideogram v2](https://replicate.com/ideogram-ai/ideogram-v2) and [Ideogram v2 Turbo](https://replicate.com/ideogram-ai/ideogram-v2-turbo) using the Replicate API.

Try it out at [inpainter.app](https://inpainter.app)

https://user-images.githubusercontent.com/2289/188992670-3dc9db47-fb8e-45c1-85ee-afc850009c48.mp4

## How it works

🐢🚀 This is a Node.js app! It's powered by:

- [Replicate](https://replicate.com/), a platform for running machine learning models in the cloud.
- [Ideogram v2](https://replicate.com/ideogram-ai/ideogram-v2) and [Ideogram v2 Turbo](https://replicate.com/ideogram-ai/ideogram-v2-turbo), advanced text-to-image generation models.
- Next.js [server-side API routes](pages/api) for talking to the Replicate API
- Next.js React components for the inpainting GUI
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Lucide](https://lucide.dev/) for Icons

## Development

Prerequisites:

1. Recent version of Node.js
2. [Replicate API token](https://replicate.com/account/api-tokens)


Set your Replicate API token in your environment:

```
REPLICATE_API_TOKEN=<your-token-here>
```

Then install dependencies and run the server:

```sh
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)
