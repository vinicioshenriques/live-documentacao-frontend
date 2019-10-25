import React from 'react';

import { storiesOf } from '@storybook/react';

import Button from '../../src/components/Button';

storiesOf('Components|Button', module)
  .add('with icon and text', () => (
    <Button icon="FaTwitter" type="button">
      This is a button with icon and text
    </Button>
  ))
  .add('with text', () => (
    <Button type="button">This is a button and text</Button>
  ))
  .add('with custom color', () => (
    <Button type="button" color="#a0a0a0">
      This is a button with custom color
    </Button>
  ))
  .add('large button', () => (
    <Button large type="button">
      This is a large button
    </Button>
  ))
  .add('secondary', () => (
    <Button type="button">This is a secondary button</Button>
  ));
