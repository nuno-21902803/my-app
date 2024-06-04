'use client';
import { PencilIcon, TrashIcon, PlusIcon } from '@heroicons/react/16/solid';
import React from 'react';

type ButtonProps = {
    type: "button" | "submit";
    iconType: 'add' | 'edit' | 'delete';
}; 


export default function TaskButton(props: ButtonProps) {
    const handleClick = (event : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        console.log("clicked");
    }

    const renderIcon = () => {
        if (props.iconType === 'edit') {
          return <PencilIcon className="h-5 w-5 text-yellow-500" />;
        } else if (props.iconType === 'delete') {
          return <TrashIcon className="h-5 w-5 text-red-500" />;
        } else {
          return <PlusIcon className="h-5 w-5 text-green-500" />;
        }
      };

    return (
        <button onClick = {handleClick} type={props.type} >
                {renderIcon()}
        </button>
        );  
}