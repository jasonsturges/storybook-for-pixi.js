import * as PIXI from "pixi.js";
import { createScene } from "../../stories/Scene";
import { parseColor } from "../utils/ColorUtils";

function drawStar(target, x, y, points, innerRadius, outerRadius, angle = 0) {
  if (points > 2) {
    let step, halfStep, start, n, dx, dy;
    step = (Math.PI * 2) / points;
    halfStep = step / 2;
    start = (angle / 180) * Math.PI;
    target.moveTo(
      x + Math.cos(start) * outerRadius,
      y - Math.sin(start) * outerRadius
    );
    for (n = 1; n <= points; ++n) {
      dx = x + Math.cos(start + step * n - halfStep) * innerRadius;
      dy = y - Math.sin(start + step * n - halfStep) * innerRadius;
      target.lineTo(dx, dy);
      dx = x + Math.cos(start + step * n) * outerRadius;
      dy = y - Math.sin(start + step * n) * outerRadius;
      target.lineTo(dx, dy);
    }
    target.closePath();
  }
}

export const createStar = ({
  width,
  height,
  stroke,
  color,
  fill,
  points,
  innerRadius,
  outerRadius,
  angle,
}) => {
  const { canvas, app, viewport } = createScene({ width, height });

  const graphics = new PIXI.Graphics();
  graphics.lineStyle(stroke, parseColor(color));
  graphics.beginFill(parseColor(fill));

  drawStar(
    graphics,
    width / 2,
    height / 2,
    points,
    innerRadius,
    outerRadius,
    angle
  );

  viewport.addChild(graphics);

  return canvas;
};
