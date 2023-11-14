'use server'
import { revalidatePath } from 'next/cache';
import {prisma} from './db';

export const newTodo = async (formData) => {
    const todo = await prisma.todo.create({
        data: {
            content: formData.get('content')
        }
    })
    revalidatePath('/posts')
}