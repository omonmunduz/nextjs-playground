
import { prisma } from '@/utils/db';
import TodoList from '@/components/TodoList';
import NewToDoForm from '@/components/NewToDoForm';
import Editor from '@/components/Editor';
import classNames from 'classnames';
import styles from "./posts.module.scss";


const getData = async () => {
    const todos = await prisma.todo.findMany({})
    return todos
}


const PostsPage = async () => {
    const todos = await getData();

    const titleClass = classNames('font-momo', {
      [styles.title]: true,
    })

  return (
    <section className={styles.postsPage}>
      <div className={styles.postsPageIntro}>
        <h1 className={titleClass}>Posts</h1>
      </div>
      <div className={styles.formInput}>
        <Editor/>
      </div>
      <div className={styles.todoListCtn}>
        <TodoList todos={todos}/>
      </div>
    </section>
  )
}

export default PostsPage