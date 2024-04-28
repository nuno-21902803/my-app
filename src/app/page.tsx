import AddTask from "./components/AddTask";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <h1 className="text-center font-mono font-bold">Welcome to my TODO list App.</h1>
          <AddTask/>
    </main>
  );
}
