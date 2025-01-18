import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req) {
    try {
        // Fetch data from the database
        const employees = await prisma.employee.findMany();
        const positions = await prisma.position.findMany();

        // Combine both datasets into a single object or array
        const data = {
            employees,
            positions,
        };

        console.log('>>>>>', data);

        return new Response(JSON.stringify(data), { status: 200 });
    } catch (error) {
        return new Response(
            JSON.stringify({ error: "Failed to fetch employees" }),
            { status: 500 }
        );
    } finally {
        await prisma.$disconnect();
    }
}
