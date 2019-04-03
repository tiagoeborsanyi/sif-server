import React from 'react';

const select = (props) => (
        <select id={props.id}>
            <option>Selecione</option>
            {props.options.map(opt => (
                <option>{opt}</option>
            ))}
        </select>
);

export default select;