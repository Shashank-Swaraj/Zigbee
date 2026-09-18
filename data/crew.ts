// File: data/crew.ts
import { CrewRoster } from "@/types/crew";

/**
 * ZIGBEE CREW ROSTER DATA
 * ---------------------------------------------------------------------------
 * When a member's photo is ready:
 * 1. Place their image in `asset/crew/` (e.g. `shashank.jpg`).
 * 2. Or add their public URL/GitHub avatar in `photoUrl`.
 * 
 * If `photoUrl` is omitted or empty, the Polaroid automatically renders
 * the sleek dark silhouette vector avatar!
 */

export const crewData: CrewRoster = {
  // -------------------------------------------------------------------------
  // 1. LEADERSHIP
  // -------------------------------------------------------------------------
  leadership: [
    {
      id: "president",
      name: "Sanjana Biswas",
      role: "PRESIDENT",
      linkedinUrl: "https://www.linkedin.com/in/sanjana-biswas-a4575a326/",
    },
    {
      id: "vice-president",
      name: "Shyam Piparva",
      role: "VICE PRESIDENT",
      linkedinUrl: "https://www.linkedin.com/in/shyam-piparva-10a057327/",
    },
    {
      id: "secretary",
      name: "Nikita Sharaf",
      role: "SECRETARY",
      linkedinUrl: "https://www.linkedin.com/in/nikita-sharaf-31094438a/",
    },
    {
      id: "vice-secretary",
      name: "Ronan Tyler",
      role: "VICE SECRETARY",
      linkedinUrl: "https://www.linkedin.com/in/ronan-tyler-76016b3ba/",
    },
  ],

  // -------------------------------------------------------------------------
  // 2. TEAM LEADS
  // -------------------------------------------------------------------------
  teams: [
    {
      id: "tech-team",
      key: "TECHNICAL",
      title: "TECHNICAL",
      iconType: "code",
      members: [
        {
          id: "tech-lead-1",
          name: "Shashank",
          role: "Tech Lead",
          linkedinUrl: "https://www.linkedin.com/in/shashank-swaraj/",
        },
        {
          id: "tech-lead-2",
          name: "Deepthi Shree.S",
          role: "Tech Lead",
          linkedinUrl: "https://www.linkedin.com/in/deepthi-shree-s-682832325/",
        },
      ],
    },
    {
      id: "design-team",
      key: "DESIGN",
      title: "DESIGN",
      iconType: "pencil",
      members: [
        {
          id: "design-lead-1",
          name: "Ashish Kumar",
          role: "Design Lead",
          linkedinUrl: "https://www.linkedin.com/in/ashish-kumar-pradhan-8b1417344/",
        },
        {
          id: "design-lead-2",
          name: "Sanskriti Mittal",
          role: "Design Lead",
          linkedinUrl: "https://www.linkedin.com/in/sanskriti-mittal-058a93307/",
        },
      ],
    },
    {
      id: "photo-team",
      key: "PHOTOGRAPHY",
      title: "PHOTOGRAPHY",
      iconType: "camera",
      members: [
        {
          id: "photo-lead-1",
          name: "Kiruthik Kumaran K",
          role: "Photo Lead",
          linkedinUrl: "https://www.linkedin.com/in/kiruthik-kumaran-k-021a15344/",
        },
        {
          id: "photo-lead-2",
          name: "Shaik Mohammed",
          role: "Photo Lead",
          linkedinUrl: "https://www.linkedin.com/in/shaik-mohammed-b4101a395/",
        },
      ],
    },
    {
      id: "marketing-team",
      key: "MARKETING",
      title: "MARKETING",
      iconType: "megaphone",
      members: [
        {
          id: "marketing-lead-1",
          name: "Sankhya RS",
          role: "Marketing Lead",
          linkedinUrl: "https://www.linkedin.com/in/sankhya-rs-59957a340?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        },
        {
          id: "marketing-lead-2",
          name: "Shreya Jit",
          role: "Marketing Lead",
          linkedinUrl: "https://www.linkedin.com/in/shreya-jit-30500b326/",
        },
      ],
    },
    {
      id: "social-team",
      key: "SOCIAL_MEDIA",
      title: "SOCIAL MEDIA",
      iconType: "heart",
      members: [
        {
          id: "social-lead-1",
          name: "Priyanka Priyadarsani",
          role: "Social Lead",
          linkedinUrl: "https://www.linkedin.com/in/priyanka-priyadarsani-majhi-b52a17331/",
        },
        {
          id: "social-lead-2",
          name: "Nishant Kumar",
          role: "Social Lead",
          linkedinUrl: "https://www.linkedin.com/in/nishant-kumar-nayak-9b759b373/",
        },
      ],
    },
  ],

  // -------------------------------------------------------------------------
  // 3. FACULTY
  // -------------------------------------------------------------------------
  faculty: [
    {
      id: "faculty-advisor-1",
      name: "Dr. Vikram Neerugatti",
      role: "Head-of-Department",
      department: "Department of Computer Science & Engineering (IoT)",
      university: "Jain (Deemed-to-be University)",
      linkedinUrl: "https://www.linkedin.com/in/vikram-neerugatti-90368917/",
    },
    {
      id: "faculty-advisor-2",
      name: "Dr. Basavaraju D R",
      role: "Faculty Coordinator",
      department: "Department of Computer Science & Engineering (IoT)",
      university: "Jain (Deemed-to-be University)",
      linkedinUrl: "https://www.linkedin.com/in/basavaraju-d-r-660ab0a4/",
    },
  ],
};

export const crewQuotes = {
  heroTagline: "SAME PEOPLE. BIGGER CURIOSITY.",
  heroMonospaceBox: {
    line1: "DIFFERENT ROLES. SAME MISSION.",
    line2: "WIRES. PEOPLE. IDEAS.",
  },
  leadershipNote: "The real energy behind the chaos. :)",
  tornNoteLines: [
    "Ideas.",
    "People.",
    "Progress.",
    "The Crew.",
  ],
  techBatmanJoke: "Gotham has Batman. We have a Tech Lead.",
  facultyPerspective: "Same curiosity. More perspective.",
  facultyGrounding: "Guides the chaos. Keeps us grounded. :)",
  bottomIndexCard: {
    quote: "Good things happen when curious people build together.",
    author: "ZIGBEE CREW",
  },
  telemetry: {
    line1: "REAL DEVICES.",
    line2: "REAL PEOPLE.",
    line3: "REAL PROGRESS.",
  },
} as const;