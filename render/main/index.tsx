//react入口文件
import React, {useEffect, useState} from 'react';
import ReactDom from 'react-dom';

const App = () => {
    return <div>
        <div>hello react-electron</div>
        <div>test</div>
    </div>
}
ReactDom.render(<App></App>, document.getElementById('root'));
