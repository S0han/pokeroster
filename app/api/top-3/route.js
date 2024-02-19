import { top3Pokemon } from '../../db/prisma';
import { NextResponse } from 'next/server';

export async function GET(req, res) {
    try {
        const top3 = await top3Pokemon();
        return res.json(top3);
    } catch (e) {
        return NextResponse.json(`Webhook error: ${e.message}`, {
            status: 500,
        });
    }
}