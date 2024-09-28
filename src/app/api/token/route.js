// // src/app/api/token/route.js
// import { getToken } from '@/app/commercetools/token';
// import { NextResponse } from 'next/server';

// export async function GET(req) {
//     try {
//         const token = await getToken();
//         console.log("token: ", token)
//         return NextResponse.json(token, { status: 200 });
//     } catch (error) {
//         console.error('Error fetching token:', error);
//         return NextResponse.json({ error: 'Failed to fetch token' }, { status: 500 });
//     }
// }



// src/app/api/token/route.js
import { NextResponse } from 'next/server';

export async function GET(req) {
    const userName = process.env.NEXT_PUBLIC_COMMERCETOOLS_CLIENT_ID;
    const passWord = process.env.NEXT_PUBLIC_COMMERCETOOLS_CLIENT_SECRET;
    const credentials = btoa(`${userName}:${passWord}`);
    try {
        const response = await fetch(process.env.NEXT_PUBLIC_TOKEN_URL, {
            method: 'POST',
            headers: {
                "Authorization": `Basic ${credentials}`,
                'Content-Type': 'application/json',
            }
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const tokenData = await response.json();
        return NextResponse.json(tokenData, { status: 200 });
    } catch (error) {
        console.error('Error fetching token:', error);
        return NextResponse.json({ error: 'Failed to fetch token' }, { status: 500 });
    }
}
