function TODOHero({ todos_completed, total_todos }: { todos_completed: any, total_todos: any }) {
    return (
        <section>
            <div>
                <p>Task Done</p>
                <p>Keep it up</p>
            </div>
            <div>
                {todos_completed}/{total_todos}
            </div>
        </section>
    );
}
export default TODOHero;