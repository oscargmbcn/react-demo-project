import ReactDOM from 'react-dom';
import React from 'react';

import MainContainer from './components/MainContainer';

ReactDOM.render(
    <MainContainer comments={['Comentario 1', 'Comentario 2']}/>,
    document.getElementById('content')
);
