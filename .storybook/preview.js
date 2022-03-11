import { createScene, loadTextures } from "../stories/Scene";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

// Place custom global values here
// export const globals = {
//   key: "My value",
// };

let loaded = 0;
export const loaders = [
  async () => ({
    loader: loaded++ < 1 ? await loadTextures() : null,
  }),
];

export const decorators = [
  (story) => {
    createScene({
      width: window.innerWidth - 32,
      height: window.innerHeight - 36,
    });
    return story();
  },
];
