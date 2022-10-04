import { ComponentStoryObj, ComponentMeta } from '@storybook/react';
import { screen, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { Button } from './Button';

export default {
  title: 'Controls/Button',
  component: Button,
  args: {
    children: 'Button',
  },
} as ComponentMeta<typeof Button>;

// const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const PrimaryButton: ComponentStoryObj<typeof Button> = {
  play: async ({ args }) => {
    await userEvent.click(screen.getByRole('button'));
    await userEvent.click(screen.getByRole('button'));
    // @todo: https://github.com/storybookjs/storybook/issues/16941
    await expect(args.onClick).toHaveBeenCalledTimes(2);
  },
  args: {
    color: 'primary',
  },
};

export const SecondaryButton: ComponentStoryObj<typeof Button> = {
  ...PrimaryButton,
  args: {
    color: 'secondary',
  },
};

export const WarningButton: ComponentStoryObj<typeof Button> = {
  ...PrimaryButton,
  args: {
    color: 'secondary',
  },
};

export const DangerButton: ComponentStoryObj<typeof Button> = {
  ...PrimaryButton,
  args: {
    color: 'danger',
  },
};
