import * as PIXI from "pixi.js";
import { canvas, viewport } from "../Scene";
import { parseColor } from "../../src/utils/ColorUtils";
import { drawPolygon } from "../../src/components/Polygon";

export default {
  title: "Example/Polygon",
  argTypes: {
    stroke: { control: { type: "range", min: 0, max: 5, step: 0.1 } },
    color: { control: "color" },
    fill: { control: "color" },
    sides: { control: { type: "range", min: 3, max: 25, step: 1 } },
    radius: { control: { type: "range", min: 1, max: 100, step: 1 } },
    angle: { control: { type: "range", min: 0, max: 360, step: 1 } },
  },
};

const Template = ({ stroke, color, fill, sides, radius, angle }) => {
  const graphics = new PIXI.Graphics();
  graphics.lineStyle(stroke, parseColor(color));
  graphics.beginFill(parseColor(fill));
  drawPolygon(
    graphics,
    viewport.screenWidth / 2,
    viewport.screenHeight / 2,
    sides,
    radius,
    angle
  );

  viewport.addChild(graphics);

  return canvas;
};

export const Triangle = Template.bind({});
Triangle.args = {
  stroke: 2,
  color: "#cfefff",
  fill: "#036191",
  sides: 3,
  radius: 50,
  angle: 0,
};

export const Square = Template.bind({});
Square.args = {
  stroke: 2,
  color: "#cfefff",
  fill: "#036191",
  sides: 4,
  radius: 50,
  angle: 0,
};

export const Pentagon = Template.bind({});
Pentagon.args = {
  stroke: 2,
  color: "#cfefff",
  fill: "#036191",
  sides: 5,
  radius: 50,
  angle: 0,
};

export const Hexagon = Template.bind({});
Hexagon.args = {
  stroke: 2,
  color: "#cfefff",
  fill: "#036191",
  sides: 6,
  radius: 50,
  angle: 0,
};
