function TODOHero({ todos_completed, total_todos }: { todos_completed: any, total_todos: any }) {
    return (
        <section className="todohero_section">
            <div>
                {todos_completed}/{total_todos}
            </div>
            <div>
                <p className="text_large">Tasks Done</p>
            </div>

        </section>
    );
}

export default TODOHero;