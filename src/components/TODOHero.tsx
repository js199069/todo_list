function TODOHero({ todos_completed, total_todos }: { todos_completed: any, total_todos: any }) {
    return (
        <section className="todohero_section">
            <div>
                <p className="text_large">Task Done</p>
                <p className="text_small">Keep it up</p>
            </div>
            <div>
                {todos_completed}/{total_todos}
            </div>
        </section>
    );
}

export default TODOHero;