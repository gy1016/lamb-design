import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Upload } from './upload';
import Icon from '../Icon/icon';

export default {
  title: 'Example/Upload',
  component: Upload
} as ComponentMeta<typeof Upload>;

export const SimpleUpload = () => {
  return (
    <Upload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      onChange={action('changed')}
      onRemove={action('removed')}
      name="fileName"
      multiple
      drag
    >
      <Icon icon="upload" size="5x" theme="secondary" />
      <br />
      <p>Drag file over to upload</p>
    </Upload>
  );
};
