import React from 'react';

const select = (props) => (
        <select id={props.id} value={props.value} onChange={props.changed} name={props.name}>
            <option>Selecione</option>
            {props.options.map(opt => (
                <option value={opt} key={opt}>{opt}</option>
            ))}
        </select>
);

export default select;