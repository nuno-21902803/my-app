import React from 'react';

type InputProps = React.ComponentPropsWithRef<"input">;

export default function Input(props: InputProps) {
    return (
        <input  type={props.type} placeholder={props.placeholder} value={props.value} style={{ color: 'black' }}>
        </input>
        );  
}