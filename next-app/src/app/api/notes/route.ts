import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const corsHeaders = {
  'Access-Control-Allow-Origin': 'http://localhost:4200',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export async function GET() {
  const notes = await prisma.note.findMany();
  return new NextResponse(JSON.stringify(notes), {
    status: 200,
    headers: corsHeaders,
  });
}

export async function POST(req: Request) {
  const body = await req.json();
  const newNote = await prisma.note.create({
    data: { text: body.text },
  });

  return new NextResponse(JSON.stringify(newNote), {
    status: 201,
    headers: corsHeaders,
  });
}

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: corsHeaders,
  });
}
