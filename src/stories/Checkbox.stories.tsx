import React from 'react';
import {ComponentMeta, ComponentStory} from "@storybook/react";

import CheckboxComponent from './Checkbox';
// import CheckboxComponent from './Checkbox';

export default {
  component: CheckboxComponent,
  title: 'Checkbox',
} as ComponentMeta<typeof CheckboxComponent>;

const Template: ComponentStory<typeof CheckboxComponent> = (args) => <CheckboxComponent {...args} />;

export const Unselected = Template.bind({});
Unselected.args = {
  checkbox: {
    title: 'Test Checkbox3',
    state: 'CHECKBOX_UNSELECTED',
  },
};

export const Hover = Template.bind({});
Hover.args = {
  checkbox: {
    state: 'CHECKBOX_HOVER',
    title: 'Test Checkbox3',
  },
};

export const Selected = Template.bind({});
Selected.args = {
  checkbox: {
    state: 'CHECKBOX_SELECTED',
    title: 'Test Checkbox3',
  },
};