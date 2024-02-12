import { addRoster } from '../../db/prisma';

export async function POST(req, res) {
    try {
        const { pokemon1, pokemon2, pokemon3, pokemon4, pokemon5, pokemon6 } = req.body;
        const result = await addRoster([pokemon1, pokemon2, pokemon3, pokemon4, pokemon5, pokemon6]);
        console.log(result);
        
        return new Response.json('Roster Submitted Successfully', {
            status: 200,
        });

    } catch (e) {
        return new Response.json(`Webhook error: ${e.message}`, {
            status: 400,
        });
    }
}