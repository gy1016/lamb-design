var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from 'react';
import Button from './components/Button/button';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu';
import Input from './components/Input/input';
import AutoComplete from './components/AutoComplete/autoComplete';
import Upload from './components/Upload/upload';
function App() {
    var handleFetch = function (query) {
        return fetch("https://api.github.com/search/users?q=".concat(query))
            .then(function (res) { return res.json(); })
            .then(function (_a) {
            var items = _a.items;
            console.log(items);
            return items
                .slice(0, 10)
                .map(function (item) { return (__assign({ value: item.login }, item)); });
        });
    };
    var defaultFileList = [
        {
            uid: '123',
            size: 1234,
            name: 'hello.md',
            status: 'uploading',
            percent: 30
        },
        { uid: '124', size: 1234, name: 'xyz.md', status: 'success', percent: 30 },
        { uid: '125', size: 1234, name: 'lufei.md', status: 'error', percent: 30 }
    ];
    return (React.createElement("div", { className: "App" },
        React.createElement(Menu, { mode: 'vertical' },
            React.createElement(SubMenu, { title: 'sgy' },
                React.createElement(MenuItem, null, "shen"),
                React.createElement(MenuItem, null, "gao"),
                React.createElement(MenuItem, null, "yang")),
            React.createElement(MenuItem, null, "shen"),
            React.createElement(MenuItem, null, "gao"),
            React.createElement(MenuItem, null, "yang")),
        React.createElement(Button, null, "\u6309\u94AE"),
        React.createElement(Button, { btnType: 'primary', href: 'www.sgyat.cn', size: 'sm' }, "\u6309\u94AE"),
        React.createElement(Input, null),
        React.createElement(AutoComplete, { fetchSuggestions: handleFetch, onSelect: function (item) {
                console.log(item);
            } }),
        React.createElement(Upload, { action: "https://www.mocky.io/v2/5cc8019d300000980a055e76", defaultFileList: defaultFileList, drag: true })));
}
export default App;
