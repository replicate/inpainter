import Draggable from "react-draggable";
import Head from "next/head";
import html2canvas from "html2canvas";
import Image from "next/image";
import React from "react";
import useKeypress from "react-use-keypress";
import copy from "copy-to-clipboard";

export default function Home() {
  useKeypress("Escape", async () => {
    const $stage = document.getElementById("stage");
    const $wrapper = document.getElementById("window-to-the-soul");

    console.log("$stage.offsetWidth", $stage.offsetWidth);
    console.log("$stage.offsetHeight", $stage.offsetHeight);

    const options = {
      backgroundColor: "transparent",
      scale: 2,
      x: $stage.offsetWidth / 2 - $wrapper.offsetWidth / 2,
      y: $stage.offsetHeight / 2 - $wrapper.offsetHeight / 2,
      width: 512,
      height: 512,
    };

    console.log(options);
    const theCanvas = await html2canvas(
      document.getElementById("stage"),
      options
    );

    // copy(theCanvas.toDataURL());
    // console.log("copied theCanvas");

    // create a new canvase for the mask
    const mask = document.createElement("canvas");
    var ctx = mask.getContext("2d");

    //set dimensions
    mask.width = theCanvas.width;
    mask.height = theCanvas.height;

    //apply the old canvas to the new one
    ctx.drawImage(theCanvas, 0, 0);

    // ctx.globalCompositeOperation = "source-atop";
    // ctx.fillStyle = "white";
    // ctx.fillRect(0, 0, mask.width, mask.height);

    // ctx.globalCompositeOperation = "lighten";
    // ctx.fillStyle = "white";
    // ctx.fillRect(0, 0, mask.width, mask.height);

    // ctx.globalCompositeOperation = "color-dodge";
    // ctx.fillStyle = "hsl(0, 100%, 100%)";
    // ctx.fillRect(0, 0, mask.width, mask.height);

    // ctx.globalCompositeOperation = "saturation";
    // ctx.fillStyle = "hsl(0,100%, 100%)";
    // ctx.fillRect(0, 0, mask.width, mask.height);

    copy(mask.toDataURL());
    console.log("copied mask");

    return;
  });

  return (
    <div>
      <Head>
        <title>Outpainer</title>
      </Head>
      <main
        id="stage"
        className="h-screen overflow-hidden"
        style={{ minHeight: "800" }}
      >
        <div
          id="window-to-the-soul"
          className="border border-black z-10 pointer-events-none"
          style={{
            width: 512,
            height: 512,
            // background: "rgba(255, 255, 255, 0.5)",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        ></div>
        <Outpainter />
      </main>
    </div>
  );
}

function Outpainter() {
  const nodeRef = React.useRef(null);
  return (
    <Draggable nodeRef={nodeRef}>
      <div
        ref={nodeRef}
        className="z-0"
        style={{ background: "transparent", width: 2000, height: 2000 }}
      >
        <div style={{ background: "transparent", width: 384, height: 384 }}>
          Hello I am green in spirit
        </div>
        <img src="/marta.jpg" alt="Martazzz" width="256" height="256" />
        {/* <Image src="/marta.jpg" alt="Marta" width="256" height="256" /> */}
      </div>
    </Draggable>
  );
}
