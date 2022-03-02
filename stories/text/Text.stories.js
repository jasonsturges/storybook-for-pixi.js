import * as PIXI from "pixi.js";
import { createScene } from "../Scene";

export default {
  title: "Example/Text",
  argTypes: {
    width: { control: "number" },
    height: { control: "number" },
    text: { control: "text" },
    align: {
      control: {
        type: "radio",
        options: ["left", "center", "right"],
      },
    },
  },
};

/**
 * TextStyle instance
 */
export const TextStyle = (args) => {
  const { canvas, app, viewport } = createScene({
    width: args.width,
    height: args.height,
  });

  const textStyle = new PIXI.TextStyle({
    fontsize: 24,
    fill: 0xffffff,
    align: args.align,
  });

  const text = new PIXI.Text(args.text, textStyle);
  text.resolution = 8;
  viewport.addChild(text);

  return canvas;
};
TextStyle.args = {
  width: 600,
  height: 400,
  text: "Hello, World\n😀",
  align: "center",
};
