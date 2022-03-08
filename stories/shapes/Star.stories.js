import * as PIXI from "pixi.js";
import { canvas, viewport } from "../Scene";
import { drawStar } from "../../src/components/Star";
import { parseColor } from "../../src/utils/ColorUtils";

export default {
  title: "Example/Shapes",
  argTypes: {
    stroke: { control: "number" },
    color: { control: "color" },
    fill: { control: "color" },
    points: { control: "number" },
    innerRadius: { control: "number" },
    outerRadius: { control: "number" },
    angle: { control: "number" },
  },
};

export const Star = ({
  stroke,
  color,
  fill,
  points,
  innerRadius,
  outerRadius,
  angle,
}) => {
  const graphics = new PIXI.Graphics();
  graphics.lineStyle(stroke, parseColor(color));
  graphics.beginFill(parseColor(fill));

  drawStar(
    graphics,
    viewport.screenWidth / 2,
    viewport.screenHeight / 2,
    points,
    innerRadius,
    outerRadius,
    angle
  );

  viewport.addChild(graphics);

  return canvas;
};
Star.args = {
  stroke: 2,
  color: "#cfefff",
  fill: "#036191",
  points: 5,
  innerRadius: 25,
  outerRadius: 50,
  angle: 0,
};
