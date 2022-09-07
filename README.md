# Inpainter

# ⚠️ This puppy is a work in progress! ⚠️

A web demo of inpainting with Stable Diffusion using the Replicate API.

Try it out at [inpainter.vercel.app/](https://inpainter.vercel.app/)

---

<img alt="lunchbox" src="https://user-images.githubusercontent.com/2289/187780524-16a499e6-dd99-47d4-adfe-b287e25ae504.png">

## Development

```sh
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

Speeding up the playback of recorded video:

```
ffmpeg -i cherries-to-oranges.mov -filter:v "setpts=PTS/3" output.mp4
```
