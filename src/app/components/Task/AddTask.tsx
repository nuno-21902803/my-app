import React from 'react';
import TaskButton from './TaskButton';
import Input from './Input';

type ButtonProps = React.ComponentPropsWithoutRef<"button">;

export default function AddTask(props: ButtonProps) {
    return (
        <div className ="newTask">
            <TaskButton type={'submit'} iconType='add'/>
            <Input color='black' type='text' placeholder='Add new Task...'></Input>
        </div>
        );  
}