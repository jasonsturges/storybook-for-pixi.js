import * as PIXI from "pixi.js";
import { canvas, viewport } from "../Scene";

export default {
  title: "Example/Logos",
};

/**
 * Pixi logo story
 */
export const PixiLogo = () => {
  const logo = PIXI.Sprite.from("images/logo.svg");
  logo.anchor.set(0.5, 0.5);
  logo.x = viewport.screenWidth / 2;
  logo.y = viewport.screenHeight / 2;
  viewport.addChild(logo);

  return canvas;
};
