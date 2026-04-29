export interface OrgImage {
    src: string;
    caption: string;
}

export interface Organization {
    name: string;
    role: string;
    period: string;
    description: string;
    badge: string;
    details: string;
    images: OrgImage[];
}

export const organizations: Organization[] = [
    {
        name: 'GDG on Campus BINUS Malang',
        role: 'Manager · Product & Curriculum',
        period: 'Oct 2024 – Oct 2025',
        description:
            'Led a team of 8 across 4 events including 1 inter-university collaboration, coordinating speakers and cross-division alignment.',
        badge: '4 Events',
        details: 'Google Developer Group on Campus is the rebranding of GDSC. Each campus now has the opportunity to establish its own GDG for broader collaborations. As manager, responsible for overseeing task distribution, ensuring the team completes tasks efficiently, conducting monthly meetings with other divisions, and coordinating with external partners and speakers.',
        images: [
            { src: '/gdg-onboarding.jpg', caption: 'Onboarding Member GDG OC BINUS Malang' },
            { src: '/gdg/Studi-Banding.jpg', caption: 'Studi Banding | GDGoC UM X GDGoC Binus Malang' },
            { src: '/gdg/ml-sentiment.jpg', caption: 'A Dive into Machine Learning & Sentiment Analysis' },
            { src: '/gdg/gemini-ai.jpg', caption: 'AI Agent with Gemini 2.0 : Build with AI' },
            { src: '/gdg/webdev-laravel.png', caption: 'Web Development Unleash : Building with Laravel X SMKDEV' },
            { src: '/gdg/web3.jpg', caption: 'Web3 Now : Decentralize The Future' }
        ]
    },
    {
        name: 'Google Developer Student Clubs',
        role: 'Core Team · Product & Curriculum',
        period: 'Sep 2023 – Jun 2024',
        description:
            'Organized 8 events total (5 local, 3 international), securing industry speakers and managing end-to-end logistics.',
        badge: '8 Events · 3 International',
        details: 'The Google Developer Student Club is a university-based community promoting technology development. As Core Team, developed event themes aligned with GDSC vision, identified and collaborated with speakers, created detailed rundowns, and served as operator during live events.',
        images: [
            { src: '/gdsc-hackathon.png', caption: 'Empower Hackathon ft. GDSC Singapore Polytechnic' },
            { src: '/gdsc-ai-event.png', caption: 'Recent Advances in AI ft. GDSC Nanyang Polytechnic' },
            { src: '/gdsc-webdev-event.png', caption: 'Web Development Using Laravel ft. ITBCA' },
            { src: '/gdsc-flutter-event.png', caption: 'Flutter 101: A Powerful Tool for UI/UX Development' },
            { src: '/gdsc-react-event.png', caption: 'Web Developer Quest: Exploring React TypeScript' },
            { src: '/gdsc-coreteam.png', caption: 'Core Team · Product & Curriculum' }
        ]
    },
    {
        name: 'Bina Nusantara Computer Club (BNCC)',
        role: 'External Event Organizer',
        period: 'Oct 2022 – Sep 2023',
        description:
            'Contributed to media partnerships, sponsorships, and planning for 2 major events including a 3-day tech education program.',
        badge: '2 Major Events',
        details: 'As an External Event Organizer Activist, contributed to various divisions such as media partnerships, sponsorships, and event planning. Successfully organized two major events including Tech Fun Day (a 3-day tech education program at an orphanage) and BNCC UMKM Storytelling (helping local businesses go digital).',
        images: [
            { src: '/bncc-techfunday.png', caption: 'Tech Fun Day Event — Yayasan Sunan Kalijaga' },
            { src: '/bncc-umkm.png', caption: 'BNCC UMKM Storytelling: Tahu Tempe Bapak Mujiono' }
        ]
    }
];
