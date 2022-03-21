import * as PIXI from "pixi.js";
import { canvas, viewport } from "../Scene";
import { drawGear } from "../../src/components/Gear";
import { parseColor } from "../../src/utils/ColorUtils";

export default {
  title: "Example/Shapes",
  argTypes: {
    stroke: { control: { type: "range", min: 0, max: 5, step: 0.1 } },
    color: { control: "color" },
    fill: { control: "color" },
    sides: { control: { type: "range", min: 3, max: 25, step: 1 } },
    innerRadius: { control: { type: "range", min: 1, max: 100, step: 1 } },
    outerRadius: { control: { type: "range", min: 1, max: 100, step: 1 } },
    holeSides: { control: { type: "range", min: 3, max: 25, step: 1 } },
    holeRadius: { control: { type: "range", min: 1, max: 100, step: 1 } },
    angle: { control: { type: "range", min: 0, max: 360, step: 1 } },
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
    viewport.screenHeight / 2,
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
