import * as PIXI from "pixi.js";
import { Viewport } from "pixi-viewport";

export const createScene = ({ width, height }) => {
  const canvas = document.createElement("canvas");

  const app = new PIXI.Application({
    view: canvas,
    width: width,
    height: height,
    antialias: true,
    autoDensity: true,
    backgroundColor: 0x0,
    resolution: devicePixelRatio,
  });

  const viewport = new Viewport({
    worldWidth: 1000,
    worldHeight: 1000,
    screenWidth: width,
    screenHeight: height,
    divWheel: app.view,
    interaction: app.renderer.plugins.interaction,
  })
    .drag()
    .pinch()
    .wheel()
    .decelerate();

  app.stage.addChild(viewport);
  app.ticker.start();

  return {
    canvas,
    app,
    viewport,
  };
};
