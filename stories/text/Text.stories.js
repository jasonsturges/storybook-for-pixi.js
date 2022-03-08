import * as PIXI from "pixi.js";
import { canvas, viewport } from "../Scene";

export default {
  title: "Example/Text",
  argTypes: {
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
  const textStyle = new PIXI.TextStyle({
    fontsize: 24,
    fill: 0xffffff,
    align: args.align,
  });

  const text = new PIXI.Text(args.text, textStyle);
  text.resolution = 8;
  text.anchor.set(0.5);
  text.x = viewport.screenWidth / 2;
  text.y = viewport.screenHeight / 2;

  viewport.addChild(text);

  return canvas;
};
TextStyle.args = {
  text: "Hello, World\n😀",
  align: "center",
};
