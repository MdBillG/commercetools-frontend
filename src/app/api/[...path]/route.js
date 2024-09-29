// app/api/[...path]/route.js
import { NextResponse } from 'next/server';
import { fetchWithToken } from '@/utils/api';

export async function GET(req, { params }) {
    try {
        const { searchParams } = new URL(req.url);
        console.log("searchParams", searchParams)
        const offset = searchParams.get('offset') || 0;
        const limit = searchParams.get('limit') || 20;
        const id = searchParams.get('id')
        const path = params.path.join('/');

        // Construct the API URL based on the path parameter
        if (id) {
            const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/${path}/${id}`;
            const result = await fetchWithToken(req, apiUrl);
            return NextResponse.json(result, { status: 200 });
        }
        else {
            const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/${path}?offset=${offset}&limit=${limit}`;
            const result = await fetchWithToken(req, apiUrl);
            return NextResponse.json(result, { status: 200 });
        }

    } catch (error) {
        console.error("Error in API request:", error);
        return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
    }
}


export async function POST(req, { params }) {
    try {
        const body = await req.json();
        console.log("body:", body)

        // Construct the API URL based on the path parameter
        const path = params.path.join('/');
        const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/${path}`;

        console.log('POST request to:', apiUrl);
        console.log('Request body:', body);

        const result = await fetchWithToken(req, apiUrl, 'POST', body);
        console.log('Response from API:', result);

        return NextResponse.json(result, { status: 201 });
    } catch (error) {
        console.error("Detailed error in API request:", error);
        return NextResponse.json({ error: 'Failed to post data', details: error.message }, { status: 500 });
    }
}