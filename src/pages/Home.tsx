import { TodoList } from "../components/TodoList";

const Home: React.FC = () => {
  return (
    <>
      <h1 className="text-2xl font-semibold mb-4 text-center">ToDo List</h1>
      <TodoList />
    </>
  );
};

export default Home;
