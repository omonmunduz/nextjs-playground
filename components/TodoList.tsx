import Todo from '@/components/todo/Todo';


const TodoList = ({todos}) => {

    return (
        <div>
            {todos.map((todo, id) => {
                return <Todo todo={todo} key={id}/>
            })}
        </div>
    )
}

export default TodoList;