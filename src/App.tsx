import React from 'react';
import Button from './components/Button/button';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu';

function App() {
  return (
    <div className="App">
      <Menu mode={'vertical'}>
        <SubMenu title={'sgy'}>
          <MenuItem>shen</MenuItem>
          <MenuItem>gao</MenuItem>
          <MenuItem>yang</MenuItem>
        </SubMenu>
        <MenuItem>shen</MenuItem>
        <MenuItem>gao</MenuItem>
        <MenuItem>yang</MenuItem>
      </Menu>
      <Button>按钮</Button>
      <Button btnType={'primary'} href={'www.sgyat.cn'} size={'sm'}>
        按钮
      </Button>
    </div>
  );
}

export default App;
