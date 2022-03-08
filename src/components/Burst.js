export function drawBurst(
  target,
  x,
  y,
  sides,
  innerRadius,
  outerRadius,
  angle = 0
) {
  let step = (Math.PI * 2) / sides;
  let halfStep = step / 2;
  let qtrStep = step / 4;
  let start = (angle / 180) * Math.PI;
  let n, dx, dy, cx, cy;

  target.moveTo(
    x + Math.cos(start) * outerRadius,
    y - Math.sin(start) * outerRadius
  );

  for (n = 1; n <= sides; ++n) {
    cx =
      x +
      Math.cos(start + step * n - qtrStep * 3) *
        (innerRadius / Math.cos(qtrStep));
    cy =
      y -
      Math.sin(start + step * n - qtrStep * 3) *
        (innerRadius / Math.cos(qtrStep));
    dx = x + Math.cos(start + step * n - halfStep) * innerRadius;
    dy = y - Math.sin(start + step * n - halfStep) * innerRadius;
    target.quadraticCurveTo(cx, cy, dx, dy);
    cx =
      x +
      Math.cos(start + step * n - qtrStep) * (innerRadius / Math.cos(qtrStep));
    cy =
      y -
      Math.sin(start + step * n - qtrStep) * (innerRadius / Math.cos(qtrStep));
    dx = x + Math.cos(start + step * n) * outerRadius;
    dy = y - Math.sin(start + step * n) * outerRadius;
    target.quadraticCurveTo(cx, cy, dx, dy);
  }

  target.closePath();
}
