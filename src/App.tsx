import React from 'react';
import Button from './components/Button/button';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu';
import Input from './components/Input/input';
import AutoComplete from './components/AutoComplete/autoComplete';

function App() {
  const handleFetch = (query: string) => {
    return fetch(`https://api.github.com/search/users?q=${query}`)
      .then((res) => res.json())
      .then(({ items }) => {
        console.log(items);
        return items
          .slice(0, 10)
          .map((item: any) => ({ value: item.login, ...item }));
      });
  };

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
      <Input />
      <AutoComplete
        fetchSuggestions={handleFetch}
        onSelect={(item) => {
          console.log(item);
        }}
      />
    </div>
  );
}

export default App;
