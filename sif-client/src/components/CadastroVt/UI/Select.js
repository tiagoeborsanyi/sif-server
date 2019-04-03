import React from 'react';

const select = (props) => (
    <div>
        <select className={props.classe}>
            <option>Selecione</option>
            {props.options.map(opt => {
                <option>{opt}</option>
            })}
        </select>
    </div>
);

export default select;