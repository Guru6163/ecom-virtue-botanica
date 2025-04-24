import { NextResponse } from "next/server";
import { PrismaClient } from "@/lib/generated/prisma";

const prisma = new PrismaClient();

export const GET = async () => {
    try {
        const categories = await prisma.category.findMany();
        return NextResponse.json(categories);
    } catch (err) {
        console.log(err);
        return NextResponse.json({ error: 'Failed to fetch categories' }, { status: 500 })
    }
}

export const POST = async (req: Request) => {
    try {
        const body = await req.json();
        const { title, description, slug, image } = body;
        if (!title || !description || !slug || !image) {
            return NextResponse.json({ error: "Missing Fields" }, { status: 400 })
        }
        const newCategory = await prisma.category.create({
            data: {
                title, description, slug, image
            }
        })
        return NextResponse.json(newCategory, { status: 201 })
    } catch (error) {
        console.error("API Error:", error); 
        return NextResponse.json({ error: 'Failed to create category' }, { status: 500 })
    }

}