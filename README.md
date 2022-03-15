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
  title: "Example/My Story",
};
```

The above story will be located under "Example" as "My Story".

### Basic Usage

In its most simplistic form, a story simply exports a function.  The name of the function is the story name.

```js
import * as PIXI from "pixi.js";
import { canvas, viewport } from "../Scene";

export default {
  title: "Example/Logos",
};

/**
 * Pixi logo story
 */
export const PixiLogo = () => {
  const logo = PIXI.Sprite.from("images/logo.svg");
  logo.anchor.set(0.5, 0.5);
  logo.x = viewport.screenWidth / 2;
  logo.y = viewport.screenHeight / 2;
  viewport.addChild(logo);

  return canvas;
};
```

The `Scene.js` defines a reusable pixi `app`, `viewport`, and `canvas` element to perform Pixi operations.

<img width="1180" alt="story-pixi-logo" src="https://user-images.githubusercontent.com/1213591/157180116-02b38621-3d90-40f2-9d70-8ebece611c82.png">


### Providing Controls as Arguments

To include arguments, first define the `argTypes` used by the story.  These include controls of `number`, `boolean`, `text`, `color`, `date`, `radio`, `check`, and other advanced types.  See Storybook's documentation on [controls](https://storybook.js.org/docs/react/essentials/controls) for more.

```js
export default {
  title: "Example/My Story",
  argTypes: {
    width: { control: "number" },
    height: { control: "number" },
    fill: { control: "color" },
    enabled: { control: "boolean" },
    text: { control: "text" },
    align: {
      options: ["left", "center", "right"],
      control: {
        type: "radio",
      },
    },
    value: {
      control: {
        type: "range",
        min: 0,
        max: 100,
        step: 1,
      },
    },
  },
};
```

These arguments may be accessed via the `args` object, passed to the story function:

```js
export const MyStoryExample = (args) => {
  const text = new PIXI.Text(args.text, {
    fontsize: 24,
    fill: 0xffffff,
    align: args.align,
  });
}
```

Or, simply derefereced:

```js
export const MyStoryExample = ({text, align}) => {
  const text = new PIXI.Text(text, {
    fontsize: 24,
    fill: 0xffffff,
    align: align,
  });
}
```

To set default values, set the `args` of your story function immediately following the story:

```js
export const MyStoryExample = ({text, align}) => {
  // ...story implementation
}
MyStoryExample.args = {
  text: "Hello, World\n😀",
  align: "center",
};
```

The following is a full example of using arguments in a story:

```js
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
```

The above code results in:

<img width="1180" alt="story-gear" src="https://user-images.githubusercontent.com/1213591/157182691-1fbd7021-fe02-401b-830c-ed4507029195.png">


### Template

Instead of defining each individual story as a bespoke function, templates can be defined to reuse common story construction.

For example, create a template to be used by several stories:

```js
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
```

Apply the template by passing default arguments:

```js
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
```

Result of this story will be:

<img width="1180" alt="story-polygon" src="https://user-images.githubusercontent.com/1213591/157183208-2e73f6c7-741b-4566-a9b7-20b3f79ba283.png">


See more examples: [Star][ex1], [Burst][ex2], [Gear][ex3], [Text Style][ex4], [Logo][ex5], [Polygon][ex6]

  [ex1]: https://github.com/jasonsturges/storybook-for-pixi.js/blob/main/stories/shapes/Star.stories.js
  [ex2]: https://github.com/jasonsturges/storybook-for-pixi.js/blob/main/stories/shapes/Burst.stories.js
  [ex3]: https://github.com/jasonsturges/storybook-for-pixi.js/blob/main/stories/shapes/Gear.stories.js
  [ex4]: https://github.com/jasonsturges/storybook-for-pixi.js/blob/main/stories/text/Text.stories.js
  [ex5]: https://github.com/jasonsturges/storybook-for-pixi.js/blob/main/stories/logo/Logo.stories.js
  [ex6]: https://github.com/jasonsturges/storybook-for-pixi.js/blob/main/stories/polygon/Polygon.stories.js
