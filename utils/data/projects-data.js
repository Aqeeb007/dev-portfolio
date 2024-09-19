import ayla from "/public/image/ayla.jpg";
import crefin from "/public/image/crefin.jpg";
import realEstate from "/public/image/real-estate.jpg";
import travel from "/public/image/travel.jpg";

export const projectsData = [
  {
    id: 1,
    name: " Nexus- Automation Tool",
    description: ` Developed a powerful automation tool that seamlessly integrates with Google Drive, Discord, Notion, and Slack using Next.js and React Flow, streamlining workflows across multiple platforms for improved productivity. Implemented server actions in Next.js to handle real-time automation tasks, enabling users to trigger and monitor workflows across services like Slack and Notion, enhancing operational efficiency`,
    tools: [
      "NextJS",
      "React Flow",
      "PostgresSQL",
      "Typescript",
      "Clerk",
      "Prisma",
      "OAuth",
    ],
    role: "Full Stack Developer",
    code: "",
    demo: "",
    image: crefin,
  },
  {
    id: 2,
    name: "E-commerce Website",
    description: ` Developed an E-commerce Website with an Admin Dashboard using Shadcn UI-powered CMS, featuring
 customizable elements like multiple images, filters, billboards, and featured products.
 Implemented Analytics for tracking orders, sales, and revenue through detailed graphs, enhancing business insights.
 Integrated Authentication and Payment Systems with Clerk Authentication, Stripe checkout, and a robust MySQL
 database managed with Prisma and PlanetScale`,
    tools: ["NextJS", "Tailwind CSS", "Google Maps", "NestJS", "TypeScript"],
    role: "Full Stack Developer",
    code: "",
    demo: "",
    image: travel,
  },
  {
    id: 3,
    name: "AI Chat Bot",
    description:
      "Developed AI-powered chatbots for interacting with PDF documents and YouTube content, allowing users to retrieve information, receive personalized recommendations, and extract content insights using natural language queries.",
    tools: [
      "React",
      "Express",
      "TypeScript",
      "MongoDB",
      "OpenAI API",
      "Cronjob",
      "JWT",
    ],
    code: "",
    role: "Full Stack Developer",
    demo: "",
    image: realEstate,
  },
];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
