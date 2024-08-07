import TODOListItem from "./TODOListItem";

function TODOList({ todos, setTodos }: { todos: any, setTodos: any }) {
  return (
    <ol className="todo_list">
      {todos && todos.length > 0 ? (
        todos?.map((item: any, index: number) => (
          <TODOListItem key={index} item={item} todos={todos} setTodos={setTodos} />
        ))
      ) : (
        <p>Empty List</p>
      )}
    </ol>
  );
}



export default TODOList;