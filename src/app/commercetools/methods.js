import { getToken } from "./token"

export async function post(url, data) {
    const token = await getToken()
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token?.access_token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const result = await response.json()
        return result
    }
    catch (e) {
        console.error("e", e)
    }
}

// export async function get(url) {
//     const token = await getToken()
//     console.log("token", token)
//     try {
//         const response = await fetch(url, {
//             method: 'GET',
//             headers: {
//                 'Authorization': `Bearer ${token?.access_token}`,
//                 'content-type': 'application/json'
//             }
//         })
//         const result = await response.json()
//         return result
//     }
//     catch (e) {
//         console.error("e", e)
//     }
// }


export async function get(url) {
    try {
        // Fetch the token from the server-side API
        const tokenResponse = await fetch('/api/token');
        if (!tokenResponse.ok) {
            throw new Error('Failed to fetch token');
        }

        const token = await tokenResponse.json();
        console.log("token", token);

        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token.access_token}`,
                'content-type': 'application/json'
            }
        });

        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Error in get function:", error);
    }
}