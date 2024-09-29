import { fetchWithToken } from '@/utils/api';
import { NextResponse } from 'next/server';


export async function GET(req) {
    try {
        const { searchParams } = new URL(req.url);
        console.log("searchParams", searchParams)
        const offset = searchParams.get('offset') || 0;
        const apiUrl = `${process.env.NEXT_PUBLIC_API_ORDERS}?offset=${offset}`; // URL for your API request
        const result = await fetchWithToken(req, apiUrl);
        return NextResponse.json(result, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
    }
}
