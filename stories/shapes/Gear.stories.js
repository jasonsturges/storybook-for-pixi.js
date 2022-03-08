import * as PIXI from "pixi.js";
import { canvas, viewport } from "../Scene";
import { drawGear } from "../../src/components/Gear";
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

export const Gear = ({
  stroke,
  color,
  fill,
  sides,
  innerRadius,
  outerRadius,
  holeSides,
  holeRadius,
  angle,
}) => {
  const graphics = new PIXI.Graphics();
  graphics.lineStyle(stroke, parseColor(color));
  graphics.beginFill(parseColor(fill));

  drawGear(
    graphics,
    viewport.screenWidth / 2,
    viewport.screenWidth / 2,
    sides,
    innerRadius,
    outerRadius,
    angle,
    holeSides,
    holeRadius
  );

  viewport.addChild(graphics);

  return canvas;
};
Gear.args = {
  stroke: 2,
  color: "#cfefff",
  fill: "#036191",
  sides: 8,
  innerRadius: 35,
  outerRadius: 50,
  holeSides: 8,
  holeRadius: 10,
  angle: 0,
};
