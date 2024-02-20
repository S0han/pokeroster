import { getTop3 } from '../../db/prisma';
import { NextResponse } from 'next/server';

export async function GET(req, res) {
    try {
        const top3 = await getTop3();
        res.json(top3);
        console.log(top3);

    } catch (e) {
        return NextResponse.json(`Webhook error: ${e.message}`, {
            status: 500,
        });
    }
}