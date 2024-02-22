import { getTop3 } from '../../db/prisma';
import { NextResponse } from 'next/server';

export async function GET(req, res) {
    try {
        const top3 = await getTop3();
        console.log(`Original GET Request Data: ${top3}`);
        return NextResponse.json(top3);
    } catch (e) {
        console.error(e.message);
    }
}