import React from 'react';

const student = (props) => {

    return (
        <button id={props.id} value={props.content} className={props.className} onClick={props.click}>{props.content}</button>
    );
}

export default student;