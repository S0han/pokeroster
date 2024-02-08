// export const dynamic = 'force-dynamic';
export async function POST() {
    const finalRoster = {
        pokemon1: rosterData[0],
        pokemon2: rosterData[1],
        pokemon3: rosterData[2],
        pokemon4: rosterData[3],
        pokemon5: rosterData[4],
        pokemon6: rosterData[5]
    };
    
    try {
        const res = await fetch('submit-roster', {
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

