import type { Event } from "@/types";

export const events: Event[] = [
  {
    id: "aws-cloud-day-q3-2025",
    slug: "aws-cloud-day-q3-2025",
    title: "AWS SBG 2026",
    date: "2026-06",
    
    location: "School of Computer Sciences, USM",
    type: "Kickstart",
    status: "upcoming",
    description:"Ready to kickstart your AWS journey but not sure where to begin? Say less — we've got you!",
    tags: ["AWS"],
    registrationUrl: "https://forms.gle/placeholder",
    speakers: [
      {
        name: "Ahmad Razif",
        role: "AWS Certified Solutions Architect",
        company: "AWS SBG USM",
        bio: "3x AWS certified, passionate about making cloud accessible for students.",
        linkedin: "https://linkedin.com",
      },
    ],
  },
  {
    id: "tech-talk-gen-ai-2025",
    slug: "tech-talk-gen-ai-2025",
    title: "Agentic AI Vibe Coding with Kiro Session" ,
    date: "2026-04-04",
    time: "10:30 AM – 12:30 PM",
    location: "Webex, USM",
    type: "talk",
    status: "past",
    description:
      "Curious about AI that can code, plan, and build? Join 𝐀𝐠𝐞𝐧𝐭𝐢𝐜 𝐀𝐈 𝐕𝐢𝐛𝐞 𝐂𝐨𝐝𝐢𝐧𝐠 𝐰𝐢𝐭𝐡 𝐊𝐢𝐫𝐨 and explore the power of agentic development.",
    attendeeCount: 122,
    tags: ["GenAI", "Kiro Agent", "Builders"],
  },

    {
    id: "AWS-Essentials-2025",
    slug: "AWS-Essentials-2025",
    title: "AWS Essentials for Student Projects: From Zero to Deployed",
    date: "2025-12-29",
    time: "5:30 PM – 7:30 PM",
    location: "CS School Lab 4, USM",
    type: "Workshop",
    status: "past",
    description:
      "Ready to turn your idea into a real, deployed application? Join us for a hands-on AWS session where you’ll learn to build and deploy with AWS (EC2, S3, Lambda, IoT Core) with guided hands-on training and free sandbox accounts.",
    attendeeCount: 77,
    tags: ["Hands-on", "Lambda ", "EC2 ", "Deploy "],
  },

{
    id: "Fireside-Chat-2025",
    slug: "Fireside-Chat-2025",
    title: "Fireside Chat with AWS Community Hero & Builders",
    date: "2025-11-08",
    time: "6:00 AM – 7:45 AM",
    location: "Webex, USM",
    type: "Builder Session",
    status: "past",
    description:
      "Join us for an exciting Fireside Chat session featuring AWS Community Hero and Builders, where you’ll gain valuable insights on building with AWS services.",
    attendeeCount: 73,
    tags: ["Serverless ", "Portfolio ", "Community"],
  },

  {
    id: "AWS-Cloud-Club-2025",
    slug: "AWS-Cloud-Club-2025",
    title: "AWS Cloud Club USM Introductory Event",
    date: "2025-03-08",
    time: "04:00 PM – 5:30 PM",
    location: "Webex, USM",
    type: "Kickstart",
    status: "past",
    description:
      "Ready to kickstart your cloud journey but not sure where to begin? Say less — we've got you! 🙌 Join us for a beginner-friendly session packed with insights, inspiration, and expert advice — perfect for curious minds looking to dive into cloud computing.",
    attendeeCount: 59,
    tags: ["Cloud ", "Beginner ", "AWS"],
  },
];
