import { NextResponse } from 'next/server';
import { PrismaClient } from '@/lib/generated/prisma';

const prisma = new PrismaClient();

// GET product by ID
export async function GET(
  _req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const product = await prisma.product.findUnique({
      where: { id: params.id },
      include: { category: true },
    });
    if (!product) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching product' }, { status: 500 });
  }
}

// PUT update product
export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const data = await request.json();
    const updatedProduct = await prisma.product.update({
      where: { id: params.id },
      data,
    });
    return NextResponse.json(updatedProduct);
  } catch (error) {
    return NextResponse.json({ error: 'Error updating product' }, { status: 400 });
  }
}

// DELETE product
export async function DELETE(
  _request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.product.delete({
      where: { id: params.id },
    });
    return NextResponse.json({ message: 'Product deleted' });
  } catch (error) {
    return NextResponse.json({ error: 'Error deleting product' }, { status: 400 });
  }
}
