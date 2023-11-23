import { prisma } from "@/app/_utils/db";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
    
export const POST = async (request: Request, {params}) => {
    console.log('just to check if it is actually running')
    const {title, subtitle, content} = await request.json();
    try {
        const updatedPostsList = await prisma.todo.create({
            data: {
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