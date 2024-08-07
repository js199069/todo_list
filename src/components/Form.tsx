import { useFormik } from "formik";

function Form({ todos, setTodos }: { todos: any, setTodos: any }) {

    const validate = (values: any) => {
        const errors: any = {};
        if (!values.title) {
            errors.title = 'Required';
        } else if (values.title.length < 3) {
            errors.title = 'Must be 3 characters or more';
        }

        return errors;
    };

    const formik = useFormik({
        initialValues: {
            title: '',
            id: self.crypto.randomUUID(),
            is_completed: false,
        },
        validate,
        onSubmit: async (values, actions) => {
            const newTodo = {
                title: values.title,
                id: values.id,
                is_completed: values.is_completed,
            };

            // Update todo state
            setTodos((prevTodos: any) => [...prevTodos, newTodo]);

            // Store updated todo list in local storage
            const updatedTodoList = JSON.stringify([...todos, newTodo]);
            localStorage.setItem("todos", updatedTodoList);

            alert(JSON.stringify(values, null, 2));
            actions.resetForm();
        },
    });

    return (
        <form className="form" onSubmit={formik.handleSubmit}>
            <label htmlFor="todo">
                <input
                    type="text"
                    name="title"
                    id="todo"
                    placeholder="Write your next task"
                    onChange={formik.handleChange}
                    value={formik.values.title}
                />
                {formik.errors.title ? <div className="error_msg">{formik.errors.title}</div> : null}
            </label>

            <button type="submit">
                <span className="visually-hidden" >Submit</span>
                <svg
                    clipRule="evenodd"
                    fillRule="evenodd"
                    strokeLinejoin="round"
                    strokeMiterlimit="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    width={32}
                    height={32}
                >
                    <path
                        d="m11 11h-7.25c-.414 0-.75.336-.75.75s.336.75.75.75h7.25v7.25c0 .414.336.75.75.75s.75-.336.75-.75v-7.25h7.25c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-7.25v-7.25c0-.414-.336-.75-.75-.75s-.75.336-.75.75z"
                        fillRule="nonzero"
                    />
                </svg>
            </button>
        </form>
    );
}

export default Form;