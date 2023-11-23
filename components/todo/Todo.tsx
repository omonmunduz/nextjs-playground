import classNames from "classnames";
import styles from './todo.module.scss';

const cardBox = classNames('border-2 rounded-md border-gray-900 bg-white', {
    [styles.todoCtn]: true,
})

const Todo = ({todo}) => {
    return <div className={cardBox}>
        <div className={styles.innerCtn}>
            <h5>{todo.title}</h5>
            <p>{todo.subtitle}</p>
            <p className={styles.todo}>{todo.content}</p>
        </div>
    </div>
};

export default Todo;