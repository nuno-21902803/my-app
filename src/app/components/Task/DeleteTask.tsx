import React from 'react';

//Doesn't need the Ref when calling the component
type ButtonProps = React.ComponentPropsWithoutRef<"button">;

export default function DeleteTask(props: ButtonProps) {
    return (
        <button className="btn btn-primary w-full">
                        Delete Task
        </button>
        );  
}