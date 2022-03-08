# Storybook for Pixi.js
Using Storybook for Pixi.js graphics development

<img width="1180" alt="storybook-for-pixi" src="https://user-images.githubusercontent.com/1213591/154822267-78469605-ebf1-4280-adbc-025832b78553.png">

This project includes:
- [Storybook](https://storybook.js.org/)
- [Pixi.js](https://pixijs.com/)
- [Pixi Viiewport](https://github.com/davidfig/pixi-viewport)

Live example at: https://jasonsturges.github.io/storybook-for-pixi.js


## Background

Often conventions involve developing components in isolation and leveraging GUI frameworks such as [dat.GUI](https://github.com/dataarts/dat.gui) for controls.

For projects of greater complexity there may be a need to classify numerous scenarios, which is the catalyst for this project.


## Getting Started

Begin via any of the following:

- Press the "*Use this template*" button

- Use [degit](https://github.com/Rich-Harris/degit) to execute: 

    ```
    degit github:jasonsturges/storybook-for-pixi.js
    ```
    
- Use [GitHub CLI](https://cli.github.com/) to execute: 

    ```
    gh repo create <name> --template="https://github.com/jasonsturges/storybook-for-pixi.js"
    ```
    
- Simply `git clone`, delete the existing .git folder, and then:

    ```
    git init
    git add -A
    git commit -m "Initial commit"
    ````
    
    
Install and run via npm (or yarn) by executing the `storybook` script:

```
npm install
npm run storybook
```


## Configuration

Storybook supports the following configurations.


### Story Location

If you prefer to keep stories out of the root or `src/` folders, you can optionally store them within the `.storybook/` folder.  This isolates all aspects of Storybook within a single folder.  

Move your `stories/` folder inside `.storybook/` and update Storybook's `main.js` configuration file to the new path:

```json
"stories": [
  "./stories/**/*.stories.mdx",
  "./stories/**/*.stories.@(js|jsx|ts|tsx)"
],
```


### Public Static Assets

Static assets can be served and referenced via stories by configuring the `staticDirs` property in the `main.js` configuration file.

```js
staticDirs: ["../public"],
```

In this template, public assets are served from the `public/` folder.


### Global Variables

Global variables can be defined via the `globals` object in the `main.js` configuration file.

For example, define a `myKey` property as follows:

```js
// Place custom global values here
export const globals = {
  myKey: "My value",
};
```

Inside every story, the `globals` object may be accessed and derefereced as follows:

```js
export const Template = (args, { globals: { myKey } }) => {
  console.log(myKey); // => "My value"
};
```


### Loaders

If your stories depend on textures loaded before the story executes, use Storybook's experimental `loaders` feature, defined in the `preview.js` under the `.storybook/` folder.

This may be necessary if your sprites pivot or inverse scsale to flip and mirror textures, as width and height of the texture must be known at instantiation.

```js
import { loadTextures } from "../stories/Scene";

export const loaders = [
  async () => ({
    loader: await loadTextures(),
  }),
];
```

Loaders feature async await for synchronous blocking - an indeterminate spinner will appear upon the first load of Storybook while all assets are loaded.  Once complete, stories will display as normal.  This happens only once per load of the Storybook webpage.

As an example, the `Scene.js` loads the Pixi.js svg logo.

```js
export const loadTextures = async () => {
  return new Promise((resolve, reject) => {
    const loader = new PIXI.Loader();
    loader //
      .add("images/logo.svg")
      .load();

    loader.onComplete.add(() => {
      resolve();
    });

    loader.onError.add(() => {
      reject();
    });
  });
};
```


### Decorators

Decorators run every time a story changes.  To insert code, or expand the template, edit the `decorators` found within the `preview.js` under the `.storybook/` folder.

```js
export const decorators = [
  (story) => {
    createScene({
      width: window.innerWidth - 32,
      height: window.innerHeight - 36,
    });
    return story();
  },
];
```


## TypeScript

To add support for TypeScript, just add the `typescript` package to your `package.json` dev dependencies:

```json
"devDependencies": {
  "tslib": "^2.3.1",
  "typescript": "^4.5.5"
}
```


## Usage

To create a story, add a new file under the `stories/` folder named `<story-name>.stories.js`.

Each story has a default export for navigation grouping and argument types:

```js
export default {
  title: "Example/Squares",
  argTypes: {
    width: { control: "number" },
    height: { control: "number" },
    stroke: { control: "color" },
  },
};
```

In that story, create a template via the `createScene()` function and returning the `canvas` object:

```js
const Template = (args) => {
  const { canvas, app, viewport } = createScene({
    width: args.width,
    height: args.height,
  });

  const graphics = new PIXI.Graphics();
  graphics.lineStyle(2, parseColor(args.stroke));
  graphics.drawRect(100, 100, 200, 200);
  viewport.addChild(graphics);

  return canvas;
};
```

Apply the template by passing default arguments:

```js
export const Square1 = Template.bind({});
Square1.args = {
  width: 600,
  height: 400,
  stroke: "#ffffff",
};

export const Square2 = Template.bind({});
Square2.args = {
  width: 600,
  height: 400,
  stroke: "#ff00ff",
};
```

Result of this story will be:

![storybook-squares](https://user-images.githubusercontent.com/1213591/154827145-525bd885-a041-43b8-a9ea-a29e3e6a0ba1.gif)

See more examples: [Star][ex1], [Burst][ex2], [Gear][ex3], [Text Style][ex4]

  [ex1]: https://github.com/jasonsturges/storybook-for-pixi.js/blob/main/src/components/Star.stories.js
  [ex2]: https://github.com/jasonsturges/storybook-for-pixi.js/blob/main/src/components/Burst.js
  [ex3]: https://github.com/jasonsturges/storybook-for-pixi.js/blob/main/src/components/Gear.stories.js
  [ex4]: https://github.com/jasonsturges/storybook-for-pixi.js/blob/main/stories/text/Text.stories.js
