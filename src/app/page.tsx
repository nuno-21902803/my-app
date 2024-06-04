import AddTask from "./components/Task/AddTask";
import Task from "./components/Task/Task";

export default function Home() {

  const tasks = [
    { id: 1, name: "Create my TODO list", status: "Done" },
    { id: 2, name: "Do the influencer project", status: "OnGoing" },
    { id: 3, name: "Make real money", status: "Todo" }
  ];


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <h1 className="text-center font-mono font-bold">Welcome to my TODO list App.</h1>
          <div className="addTask">
            <AddTask/>
          </div>
          <div className="taskList">
            {tasks.map(task => (
              <Task key={task.id} name={task.name} status={task.status} />
            ))}
        </div>
    </main>
  );
}
