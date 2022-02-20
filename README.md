# Storybook for Pixi.js
Using Storybook for Pixi.js component development

<img width="1180" alt="storybook-for-pixi" src="https://user-images.githubusercontent.com/1213591/154822267-78469605-ebf1-4280-adbc-025832b78553.png">

This project includes:
- [Storybook](https://storybook.js.org/)
- [Pixi.js](https://pixijs.com/)
- [Pixi Viiewport](https://github.com/davidfig/pixi-viewport)


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

## Usage

To create a story, add a new file under the "_stories/_" folder named "_&lt;story-name&gt;.stories.js_"

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

See more examples: [Star][ex1], [Burst][ex2], [Gear][ex3]


  [ex1]: https://github.com/jasonsturges/storybook-for-pixi.js/blob/main/stories/Star.stories.js
  [ex2]: https://github.com/jasonsturges/storybook-for-pixi.js/blob/main/stories/Burst.stories.js
  [ex3]: https://github.com/jasonsturges/storybook-for-pixi.js/blob/main/stories/Gear.stories.js
