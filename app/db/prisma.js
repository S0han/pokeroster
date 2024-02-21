import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

//add this roster data using the format below in DB
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

//Export the top 3 names generated through the query from DB to the top-3 API folder
export async function getTop3() {
    const top3Pokemon = await prisma.$queryRaw`
        SELECT pokemon_name, COUNT(*) AS occurrences
        FROM (
            SELECT pokemon1 AS pokemon_name FROM rosters WHERE pokemon1 IS NOT NULL
            UNION ALL
            SELECT pokemon2 AS pokemon_name FROM rosters WHERE pokemon2 IS NOT NULL
            UNION ALL
            SELECT pokemon3 AS pokemon_name FROM rosters WHERE pokemon3 IS NOT NULL
            UNION ALL
            SELECT pokemon4 AS pokemon_name FROM rosters WHERE pokemon4 IS NOT NULL
            UNION ALL
            SELECT pokemon5 AS pokemon_name FROM rosters WHERE pokemon5 IS NOT NULL
            UNION ALL
            SELECT pokemon6 AS pokemon_name FROM rosters WHERE pokemon6 IS NOT NULL
        ) AS all_pokemon
        GROUP BY pokemon_name
        ORDER BY occurrences DESC
        LIMIT 3;
    `;
    return top3Pokemon;
}