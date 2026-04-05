export interface lafdacarddata {
    id: string,
    title: string,
    description: string,
    views:number,
    trendingrank:number,
    tags: string[],
    votes: number,
    uservote?: "up"| "down"| null 
}

export const mockXData: lafdacarddata[] = [
  {
    id: "x-001",
    title: "The Great Algorithm Shift",
    description: "Engagement is down for everyone this morning. Is the algo favoring long-form video now?",
    views: 125000,
    trendingrank: 1,
    tags: ["Tech", "Algorithm", "TwitterUp","date"],
    votes: 4200,
    uservote: "up"
  },
  {
    id: "x-002",
    title: "New UI Leak",
    description: "Rumors suggest the 'Like' button might be replaced with a 'Grok' reaction.",
    views: 89000,
    trendingrank: 3,
    tags: ["Leaks", "Design", "X"],
    votes: -150,
    uservote: "down"
  },
  {
    id: "x-003",
    title: "Best Coffee in Patna?",
    description: "Looking for a quiet place with good Wi-Fi to finish some TypeScript work. Suggestions?",
    views: 1200,
    trendingrank: 45,
    tags: ["Patna", "CodingLife", "Coffee"],
    votes: 85,
    uservote: null
  },
  {
    id: "x-004",
    title: "The 10x Developer Myth",
    description: "A thread on why soft skills matter more than knowing 15 different frameworks.",
    views: 45000,
    trendingrank: 12,
    tags: ["Programming", "Career", "WebDev"],
    votes: 3100,
    uservote: "up"
  },
  {
    id: "x-005",
    title: "Rocket Launch Live",
    description: "Starship flight test 14 is about to go live. Watch the booster catch!",
    views: 2500000,
    trendingrank: 2,
    tags: ["SpaceX", "Space", "Tech"],
    votes: 52000,
    uservote: "up"
  },
  {
    id: "x-006",
    title: "Fedora vs Ubuntu",
    description: "Why I finally switched my main workstation to Fedora 40. The GNOME experience is unmatched.",
    views: 32000,
    trendingrank: 18,
    tags: ["Linux", "Fedora", "OpenSource"],
    votes: 1200,
    uservote: "up"
  },
  {
    id: "x-007",
    title: "AI is taking over my feed",
    description: "Every second post is an 'AI Influencer' selling a prompt engineering course. Make it stop.",
    views: 15000,
    trendingrank: 30,
    tags: ["AI", "Rant", "SocialMedia"],
    votes: -400,
    uservote: "down"
  },
  {
    id: "x-008",
    title: "React 19 Hooks",
    description: "A quick breakdown of the new 'use' hook and why it's a game changer for data fetching.",
    views: 67000,
    trendingrank: 8,
    tags: ["ReactJS", "Frontend", "JavaScript"],
    votes: 2800,
    uservote: "up"
  },
  {
    id: "x-009",
    title: "Morning View from Patna",
    description: "The fog over the Ganges this morning was incredible. [Image Attached]",
    views: 5400,
    trendingrank: 55,
    tags: ["Photography", "Bihar", "Morning"],
    votes: 600,
    uservote: null
  },
  {
    id: "x-010",
    title: "Dockerizing a Next.js App",
    description: "Stop manually deploying. Here is the perfect Dockerfile for your Next.js projects.",
    views: 21000,
    trendingrank: 22,
    tags: ["Docker", "NextJS", "DevOps"],
    votes: 950,
    uservote: "up"
  },
  {
    id: "x-011",
    title: "Crypto Market Crash",
    description: "Everything is red. Time to delete the app and go for a walk outside.",
    views: 400000,
    trendingrank: 4,
    tags: ["Crypto", "Finance", "Panic"],
    votes: -2100,
    uservote: "down"
  },
  {
    id: "x-012",
    title: "TypeScript 5.x Features",
    description: "Satisfies operator is still the most underrated addition to the language.",
    views: 18000,
    trendingrank: 35,
    tags: ["TypeScript", "Coding", "WebDev"],
    votes: 720,
    uservote: "up"
  },
  {
    id: "x-013",
    title: "Gaming PC Build 2026",
    description: "Finally got the RTX 6080. The power consumption is insane but the frames are worth it.",
    views: 95000,
    trendingrank: 10,
    tags: ["Gaming", "PCMR", "Hardware"],
    votes: 4300,
    uservote: "up"
  },
  {
    id: "x-014",
    title: "Unpopular Opinion: Tailwind is messy",
    description: "I'm tired of seeing 50 classes on a single div. Change my mind.",
    views: 55000,
    trendingrank: 5,
    tags: ["CSS", "WebDev", "HotTake"],
    votes: -120,
    uservote: "down"
  },
  {
    id: "x-015",
    title: "X Premium Benefits?",
    description: "Is it actually worth paying for the blue checkmark in 2026? Let's discuss.",
    views: 33000,
    trendingrank: 25,
    tags: ["XPremium", "SocialMedia", "Tech"],
    votes: 150,
    uservote: null
  },
  {
    id: "x-016",
    title: "Self-Taught Roadmap",
    description: "How I went from zero to a Software Engineer in 12 months using only free resources.",
    views: 110000,
    trendingrank: 6,
    tags: ["Career", "Education", "SoftwareEngineer"],
    votes: 8900,
    uservote: "up"
  },
  {
    id: "x-017",
    title: "The New Meme Format",
    description: "Nobody:Me at 3 AM debugging a typo:",
    views: 82000,
    trendingrank: 15,
    tags: ["Memes", "Funny", "DeveloperLife"],
    votes: 5600,
    uservote: "up"
  },
  {
    id: "x-018",
    title: "Remote Work is Ending?",
    description: "Another big tech firm just announced a 5-day RTO policy. The era is over.",
    views: 140000,
    trendingrank: 7,
    tags: ["RemoteWork", "Jobs", "BigTech"],
    votes: -3400,
    uservote: "down"
  },
  {
    id: "x-019",
    title: "Node.js vs Go for Microservices",
    description: "Go is faster, but the Node ecosystem is just too hard to leave. What are you picking for your next project?",
    views: 28000,
    trendingrank: 28,
    tags: ["Backend", "NodeJS", "Golang"],
    votes: 410,
    uservote: null
  },
  {
    id: "x-020",
    title: "Happy Friday!",
    description: "Don't push to production today. Just don't do it.",
    views: 19000,
    trendingrank: 50,
    tags: ["FridayFeeling", "DevOps", "SafeCoding"],
    votes: 2200,
    uservote: "up"
  }
];