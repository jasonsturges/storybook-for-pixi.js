import * as PIXI from "pixi.js";
import { Viewport } from "pixi-viewport";

const canvas = document.createElement("canvas");

const app = new PIXI.Application({
  view: canvas,
  width: 300,
  height: 150,
  antialias: true,
  autoDensity: true,
  backgroundColor: 0x0,
  resolution: devicePixelRatio,
});

const viewport = new Viewport({
  worldWidth: 1000,
  worldHeight: 1000,
  screenWidth: 300,
  screenHeight: 150,
  divWheel: app.view,
  interaction: app.renderer.plugins.interaction,
})
  .drag()
  .pinch()
  .wheel()
  .decelerate();

app.stage.addChild(viewport);
app.ticker.start();

export const resize = (width, height) => {
  app.renderer.resize(width, height);
  viewport.resize(width, height);
};

export const createScene = ({ width, height }) => {
  resize(width, height);

  while (viewport.children.length > 0) {
    const child = viewport.children.shift();
    child.destroy(true);
  }

  return {
    canvas,
    app,
    viewport,
  };
};
