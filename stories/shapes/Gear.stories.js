import { createGear } from "../../src/components/Gear";

export default {
  title: "Example/Shapes",
  argTypes: {
    width: { control: "number" },
    height: { control: "number" },
    stroke: { control: "number" },
    color: { control: "color" },
    fill: { control: "color" },
    sides: { control: "number" },
    innerRadius: { control: "number" },
    outerRadius: { control: "number" },
    angle: { control: "number" },
  },
};

const Template = (args) => createGear(args);

export const Gear = Template.bind({});
Gear.args = {
  width: 600,
  height: 400,
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
