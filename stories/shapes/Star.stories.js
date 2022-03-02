import { createStar } from "../../src/components/Star";

export default {
  title: "Example/Shapes",
  argTypes: {
    width: { control: "number" },
    height: { control: "number" },
    stroke: { control: "number" },
    color: { control: "color" },
    fill: { control: "color" },
    points: { control: "number" },
    innerRadius: { control: "number" },
    outerRadius: { control: "number" },
    angle: { control: "number" },
  },
};

const Template = (args) => createStar(args);

export const Star = Template.bind({});
Star.args = {
  width: 600,
  height: 400,
  stroke: 2,
  color: "#cfefff",
  fill: "#036191",
  points: 5,
  innerRadius: 25,
  outerRadius: 50,
  angle: 0,
};
