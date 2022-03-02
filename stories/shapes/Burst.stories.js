import { createBurst } from "../../src/components/Burst";

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

const Template = (args) => createBurst(args);

export const Burst = Template.bind({});
Burst.args = {
  width: 600,
  height: 400,
  stroke: 2,
  color: "#cfefff",
  fill: "#036191",
  sides: 5,
  innerRadius: 50,
  outerRadius: 30,
  angle: 0,
};
