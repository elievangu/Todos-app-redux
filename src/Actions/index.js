//npm import
import React from 'react';
import ReactDOM from 'react-dom';

//local import
import App from '../Components/App';

const TodoApp = () => {
    return (
        <App />
    )
}

ReactDOM.render(
    <TodoApp />,
    document.getElementById('root')
)