import React from 'react';

export default function Comment(props) {
    if (props.index === 2) {
        throw Error('Opps! something went wrong.')
    }
    return (
        <div style={{ border: '1px solid black' }}>
            <h2>{props.comment.name}</h2>
            <p>{props.comment.text}</p>
        </div>
    )
}