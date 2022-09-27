import React, { useState, StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

let nextId = 0;

let App = function List() {
    const [name, setName] = useState('');
    const [datas, setDatas] = useState([]);

    return (
        <>
            <h1>Data List:</h1>
            <input
                type="text"
                placeholder="Add New Data"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <button onClick={() => {
                setName('');
                setDatas([
                    ...datas,
                    { id: nextId++, name: name }
                ]);
            }}>Add</button>
            <ul>
                {datas.map(data => (
                    <li key={data.id}>{data.name} <button onClick={() => {
                        setDatas(
                            datas.filter(a =>
                                a.id !== data.id
                            )
                        );
                    }} id="fe">
                        Delete
            </button></li>
                ))}
            </ul>
        </>
    );
}

root.render(<StrictMode>
    <App />
    </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
