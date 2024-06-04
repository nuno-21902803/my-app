import React from 'react';

type ButtonProps = React.ComponentPropsWithoutRef<"button">;

export default function EditTask(props: ButtonProps) {
    return (
        <button className="btn btn-primary w-full">
                        Edit Task
        </button>
        );  
}