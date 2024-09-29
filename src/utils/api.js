// // utils/api.js
// export async function fetchWithToken(req, apiUrl) {
//     try {
//         // Fetch the token from the server-side API
//         const tokenResponse = await fetch(`${req?.nextUrl?.origin}/api/token`);

//         if (!tokenResponse.ok) {
//             throw new Error('Failed to fetch token');
//         }

//         const token = await tokenResponse.json();

//         // Make the API request using the fetched token
//         const response = await fetch(apiUrl, {
//             method: 'GET',
//             headers: {
//                 'Authorization': `Bearer ${token.access_token}`,
//                 'Content-Type': 'application/json'
//             }
//         });

//         if (!response.ok) {
//             throw new Error('Failed to fetch data from API');
//         }

//         return await response.json();
//     } catch (error) {
//         console.error("Error in API request:", error);
//         throw error; // Rethrow the error to handle it in the caller
//     }
// }


// utils/api.js
// export async function fetchWithToken(req, apiUrl) {
//     try {
//         // Fetch the token from the server-side API
//         const tokenResponse = await fetch(`${req?.nextUrl?.origin}/api/token`);

//         if (!tokenResponse.ok) {
//             throw new Error('Failed to fetch token');
//         }

//         const token = await tokenResponse.json();

//         // Make the API request using the fetched token
//         const response = await fetch(apiUrl, {
//             method: 'GET',
//             headers: {
//                 'Authorization': `Bearer ${token.access_token}`,
//                 'Content-Type': 'application/json'
//             }
//         });

//         if (!response.ok) {
//             throw new Error('Failed to fetch data from API');
//         }

//         return await response.json();
//     } catch (error) {
//         console.error("Error in API request:", error);
//         throw error; // Rethrow the error to handle it in the caller
//     }
// }



// export async function fetchWithToken(req, apiUrl, method = 'GET', body = null) {
//     try {
//         // Fetch the token from the server-side API
//         const tokenResponse = await fetch(`${req?.nextUrl?.origin}/api/token`);

//         if (!tokenResponse.ok) {
//             throw new Error('Failed to fetch token');
//         }

//         const token = await tokenResponse.json();

//         // Prepare the request options
//         const requestOptions = {
//             method: method,
//             headers: {
//                 'Authorization': `Bearer ${token.access_token}`,
//                 'Content-Type': 'application/json'
//             }
//         };

//         // Add body for POST requests
//         if (method === 'POST' && body) {
//             requestOptions.body = JSON.stringify(body);
//         }

//         // Make the API request using the fetched token
//         const response = await fetch(apiUrl, requestOptions);

//         if (!response.ok) {
//             throw new Error(`Failed to ${method} data from/to API`);
//         }

//         return await response.json();
//     } catch (error) {
//         console.error("Error in API request:", error);
//         throw error; // Rethrow the error to handle it in the caller
//     }
// }


// utils/api.js
export async function fetchWithToken(req, apiUrl, method = 'GET', body = null) {
    try {
        // Fetch the token from the server-side API
        const tokenResponse = await fetch(`${req?.nextUrl?.origin}/api/token`);

        if (!tokenResponse.ok) {
            throw new Error(`Failed to fetch token: ${tokenResponse.status} ${tokenResponse.statusText}`);
        }

        const token = await tokenResponse.json();

        // Prepare the request options
        const requestOptions = {
            method: method,
            headers: {
                'Authorization': `Bearer ${token.access_token}`,
                'Content-Type': 'application/json'
            }
        };

        // Add body for POST requests
        if (method === 'POST' && body) {
            requestOptions.body = JSON.stringify(body);
        }

        console.log('Sending request to API:', apiUrl);
        console.log('Request options:', requestOptions);

        // Make the API request using the fetched token
        const response = await fetch(apiUrl, requestOptions);

        if (!response.ok) {
            const errorBody = await response.text();
            throw new Error(`Failed to ${method} data: ${response.status} ${response.statusText}. Body: ${errorBody}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Detailed error in fetchWithToken:", error);
        throw error; // Rethrow the error to handle it in the caller
    }
}