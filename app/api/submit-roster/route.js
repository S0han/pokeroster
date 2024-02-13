import { addRoster } from '../../db/prisma';
import { NextResponse } from 'next/server';

export async function POST(req, res) {
    try {
        const { pokemon1, pokemon2, pokemon3, pokemon4, pokemon5, pokemon6 } = await req.json();
        const result = await addRoster([pokemon1, pokemon2, pokemon3, pokemon4, pokemon5, pokemon6]);
        console.log(result);
        
        return NextResponse.json('Roster Submitted Successfully', {
            status: 200,
        });

    } catch (e) {
        return NextResponse.json(`Webhook error: ${e.message}`, {
            status: 400,
        });
    }
}