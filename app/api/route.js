// export const dynamic = 'force-dynamic';
export async function POST({finalRoster}) {
    try {
        const res = await fetch('http://localhost:3001/submit-roster ', {
            method: "POST",
            headers: {
                'Content-type': "application/json"
            },
            body: JSON.stringify(finalRoster)
        });
        const data = await res.json()        
        return Response.json(data);
    }
    catch (e) {
        console.error(e)
    }   
}

