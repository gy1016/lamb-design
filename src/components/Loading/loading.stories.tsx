import { ComponentMeta } from '@storybook/react';
import { Loading } from './loading';

export default {
  title: 'Example/Loading',
  component: Loading
} as ComponentMeta<typeof Loading>;

export const SimpleLoading = () => {
  return (
    <div id="loading-contaienr" style={{ width: '100%', height: '500px' }}>
      <Loading />
    </div>
  );
};
