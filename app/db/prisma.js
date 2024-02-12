import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function addRoster(rosterData) {
    try {
        const rosterEntry = await prisma.rosters.create({
            data: {
                pokemon1: rosterData[0],
                pokemon2: rosterData[1],
                pokemon3: rosterData[2],
                pokemon4: rosterData[3],
                pokemon5: rosterData[4],
                pokemon6: rosterData[5],
            }
        });
    
        return rosterEntry
    } catch (e) {
        console.error(e);
    }
   
}