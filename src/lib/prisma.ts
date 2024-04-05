import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient({
    log:['query']
})
async function getAttendees() {
    try {
        const attendees = await prisma.checkIn.findMany(); // Note que o nome do modelo é CheckIn, não checkin
        console.log(attendees);
    } catch (error) {
        console.error('Erro ao obter os participantes:', error);
    } finally {
        await prisma.$disconnect();
    }
}

getAttendees();