import * as PIXI from "pixi.js";
import { canvas, viewport } from "../Scene";
import { drawBurst } from "../../src/components/Burst";
import { parseColor } from "../../src/utils/ColorUtils";

export default {
  title: "Example/Shapes",
  argTypes: {
    stroke: { control: "number" },
    color: { control: "color" },
    fill: { control: "color" },
    sides: { control: "number" },
    innerRadius: { control: "number" },
    outerRadius: { control: "number" },
    angle: { control: "number" },
  },
};

export const Burst = ({
  stroke,
  color,
  fill,
  sides,
  innerRadius,
  outerRadius,
  angle,
}) => {
  const graphics = new PIXI.Graphics();

  graphics.lineStyle(stroke, parseColor(color));
  graphics.beginFill(parseColor(fill));

  drawBurst(
    graphics,
    viewport.screenWidth / 2,
    viewport.screenHeight / 2,
    sides,
    innerRadius,
    outerRadius,
    angle
  );

  viewport.addChild(graphics);

  return canvas;
};
Burst.args = {
  stroke: 2,
  color: "#cfefff",
  fill: "#036191",
  sides: 5,
  innerRadius: 50,
  outerRadius: 30,
  angle: 0,
};
