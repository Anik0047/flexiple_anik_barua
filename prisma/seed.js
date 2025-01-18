const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.employee.create({
    data: {
      name: "Yash Khatri",
      experience: 3.4,
      noticePeriod: "Immediately Available",
      currentCTC: "₹12LPA",
      positions: {
        create: [
          {
            title: "SDE 1",
            company: "Cyno pharmaceutical",
            startDate: "May 23",
            endDate: "Present",
            duration: "20 months",
          },
          {
            title: "Software Engineer",
            company: "Affordplan",
            startDate: "Feb 22",
            endDate: "May 23",
            duration: "15 months",
          },
          {
            title: "Associate Software Engineer",
            company: "Accenture",
            startDate: "Aug 21",
            endDate: "Feb 22",
            duration: "6 months",
          },
          {
            title: "IT Intern",
            company: "CJ Darcl",
            startDate: "Dec 20",
            endDate: "Apr 21",
            duration: "4 months",
          },
        ],
      },
      skills: [
        ".NET Framework",
        "React Redux",
        "PostgreSQL",
        "AI/ML",
        "MySQL",
        "Azure Cloud Services",
        "Next.js",
        "JavaScript",
        "Docker",
        "MongoDB",
        "TypeScript",
        "Django",
        "MERN Stack",
        "RESTful API",
      ],
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
