
import { prisma } from '@/utils/db';
import TodoList from '@/components/TodoList';
import NewToDoForm from '@/components/NewToDoForm';


const getData = async () => {
    const todos = await prisma.todo.findMany({})
    return todos
}


const PostsPage = async () => {
    const todos = await getData();
    console.log(todos, 'todos')

  return (
    <section className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Posts</h1>
      <NewToDoForm/>
      <TodoList todos={todos}/>
    </section>
  )
}

export default PostsPage