import { newTodo } from '@/utils/actions'

const NewToDoForm = () => {
  return (
    <div>
        <form action={newTodo}>
            <input type='text' name="content" className='border border-black'/>
            <button type='submit'>New Todo</button>
        </form>
    </div>
  )
}

export default NewToDoForm