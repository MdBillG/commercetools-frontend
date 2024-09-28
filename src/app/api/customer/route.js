import { NextResponse } from 'next/server';

export async function GET(req) {
    try {
        // Fetch the token from the server-side API
        const tokenResponse = await fetch(`${req?.nextUrl?.origin}/api/token`);

        console.log("tokenResponse", tokenResponse)
        if (!tokenResponse.ok) {
            throw new Error('Failed to fetch token');
        }

        const token = await tokenResponse.json();
        const apiUrl = process.env.NEXT_PUBLIC_API_CUSTOMER; // URL for your API request

        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token.access_token}`,
                'Content-Type': 'application/json'
            }
        });

        const result = await response.json();
        return NextResponse.json(result, { status: 200 });
    } catch (error) {
        console.error("Error in API request:", error);
        return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
    }
}
