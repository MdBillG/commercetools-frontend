export async function getToken() {
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
        const result = await response.json();
        return result;

    } catch (error) {
        console.error('Error fetching token:', error);
        throw error;
    }
}

