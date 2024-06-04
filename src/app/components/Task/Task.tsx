import React from 'react';
import TaskButton from './TaskButton';

type TTaskProps = {
    id?: number;
    name: string;
    status: string;
}   

export default function Task(props: TTaskProps){
    return (
        <div className="grid grid-cols-task items-center w-1/2 h-full p-4 task bg-lightgrey">
        <div className="taskProps">
          <span className="font-bold text-black">{props.name}</span>
        </div>
        <div className="status">
          <span className={`${props.status}`}>{props.status}</span>
        </div>
        <div className="flex space-x-2 taskButtons justify-end">
          <TaskButton type={'submit'} iconType='edit' />
          <TaskButton type={'submit'} iconType='delete' />
        </div>
      </div>
    );
};
