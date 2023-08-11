import { NextResponse } from 'next/server';

export async function GET() {
  // return NextResponse.json({ message: 'api route' }, { status: 200 });
  return new NextResponse('api route');
}

export async function POST(request) {
  const data = await request.json();
  console.log(data);
  return new NextResponse(JSON.stringify(data));
}
