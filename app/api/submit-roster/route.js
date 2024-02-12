import { addRoster } from '../../db/prisma';

export async function POST(req, res) {
    try {
        const { pokemon1, pokemon2, pokemon3, pokemon4, pokemon5, pokemon6 } = req.body;
        const result = await addRoster([pokemon1, pokemon2, pokemon3, pokemon4, pokemon5, pokemon6]);
        
        console.log(result);
        
        return res.json({ message: 'Roster Submitted Successfully' });

    } catch (e) {
        console.error(e);
        return res.status(500).json({ message: 'Internal Server Error'})
    }
}