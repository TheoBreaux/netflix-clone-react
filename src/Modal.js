import React from 'react';
import Counter from './Counter';

function Modal(props) {

    return (
        <div className='modal'>
            <h1>Modal</h1>
            <button onClick={() => props.setOpenModal(false)}>X</button>
            <Counter />
        </div>

    )
}

export default Modal;
