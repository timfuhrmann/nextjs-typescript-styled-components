import { Button } from "./Button";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { mockButtonProps } from "./Button.mock";

export default {
    component: Button,
    title: "Shared/Button",
    parameters: {
        layout: "centered",
    },
    argTypes: {
        as: { table: { disable: true } },
        variant: { table: { disable: true } },
        href: { table: { disable: true } },
        shallow: { table: { disable: true } },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args}>Click me!</Button>;

export const Primary = Template.bind({});
Primary.args = mockButtonProps.primary;

export const Secondary = Template.bind({});
Secondary.args = mockButtonProps.secondary;
