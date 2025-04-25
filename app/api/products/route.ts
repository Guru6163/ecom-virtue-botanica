import { NextResponse } from 'next/server';
import { PrismaClient } from '@/lib/generated/prisma';

const prisma = new PrismaClient();

// GET all products
export async function GET() {
    try {
        const products = await prisma.product.findMany({
            include: { category: true },
        });
        console.log(products)
        return NextResponse.json(products);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
    }
}

// POST a new product
export async function POST(request: Request) {
    try {
        const data = await request.json();
        const newProduct = await prisma.product.create({
            data,
        });
        const { title, description, price, featured, image } = data
        if (!title || !description || !price || !featured || !image) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }
        if (typeof price !== 'number' || price <= 0) {
            return NextResponse.json({ error: 'Invalid price' }, { status: 400 })
        }
        return NextResponse.json(newProduct, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create product' }, { status: 400 });
    }
}
