// src/lib/prisma.ts
import { PrismaClient } from "@prisma/client";
var prisma = new PrismaClient({
  log: ["query"]
});
async function getAttendees() {
  try {
    const attendees = await prisma.checkIn.findMany();
    console.log(attendees);
  } catch (error) {
    console.error("Erro ao obter os participantes:", error);
  } finally {
    await prisma.$disconnect();
  }
}
getAttendees();

export {
  prisma
};
