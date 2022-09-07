# Inpainter

A web demo of inpainting with Stable Diffusion using the Replicate API.

Try it out at [inpainter.vercel.app/](https://inpainter.vercel.app/)

---

https://user-images.githubusercontent.com/2289/188983236-b0b912b7-c005-46d2-b2cd-cfa09ead6163.mp4

## Development

```sh
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

Speeding up the playback of recorded video:

```sh
ffmpeg -i cherries-to-oranges.mov -filter:v "setpts=PTS/3" output.mp4
```
