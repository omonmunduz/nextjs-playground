import { prisma } from "@/app/_utils/db";
import { getUserByClerkID } from "@/app/_utils/auth";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
    
export const POST = async (request: Request, {params}) => {
    //const user = await getUserByClerkID()
    console.log('just to check if it is actually running')
    const {title, subtitle, content} = await request.json();
    try {
        const updatedPostsList = await prisma.todo.create({
            data: {
                userId: user.id,
                title: title,
                subtitle: subtitle,
                content: content,
            },
        });
    
        // Trigger revalidation of the /posts path
        revalidatePath('/posts');
    
        return NextResponse.json({ data: updatedPostsList });
    } catch (error) {
        console.error('Error adding new post:', error);
        return NextResponse.error();
    }
}