export interface Project {
    title: string;
    type: string;
    description: string;
    stack: string[];
    links: { label: string; url: string }[];
}

export interface AdditionalContribution {
    description: string;
}

export const professionalProjects: Project[] = [
    {
        title: 'AI Hub Platform @ Kalbe Farma',
        type: 'Backend · AI Infrastructure',
        description:
            'Refactored a monolithic AI marketplace into a distributed microservices architecture. Designed and implemented a multi-stage report generation pipeline for medical imaging data, orchestrating ingestion (MinIO), validation, preprocessing, and AI inference using Celery, Redis, and Azure Blob Storage — enabling scalable, asynchronous processing with real-time progress tracking. Implemented semantic search with OpenCLIP + Trino and resolved GPU cold-start latency through batch processing, validated via k6 load testing.',
        stack: ['Python', 'FastAPI', 'Redis', 'Celery', 'MinIO', 'Trino', 'OpenCLIP', 'k6', 'Azure Blob'],
        links: [{ label: 'Internal Project', url: '#' }]
    },
    {
        title: 'Personalized AI Chatbot (Secure Healthcare System)',
        type: 'Backend · Healthcare · Security',
        description:
            'Designed and implemented an end-to-end encryption (E2EE) framework (AES-256-GCM, ECIES) for a production healthcare AI chatbot, including database schema migration for encrypted storage — ensuring end-to-end data confidentiality while maintaining compatibility with JWT-based authentication flows. Engineered a centralized orchestration service integrating data pipelines, LLM webhooks, and ArangoDB across cross-functional teams, introducing structured logging, error tracing, and production-grade observability.',
        stack: ['AES-256-GCM', 'JWT', 'ArangoDB', 'Supabase', 'TypeScript', 'Deno', 'Edge Functions'],
        links: [{ label: 'Internal Project', url: '#' }]
    },
    {
        title: 'FHIR R4 Server Infrastructure',
        type: 'Backend · Healthcare · Interoperability',
        description: 'Built a custom FHIR server architecture using Supabase as the backend database, leveraging an open-source FHIR server repository as the foundation. Customized and extended the server implementation to support standardized FHIR R4 resources (Patient, Observation, MedicationRequest). Ensured interoperability by thoroughly validating request bodies, API responses, and HTTP status handling according to FHIR specifications, enabling reliable data exchange with external healthcare providers.',
        stack: ['Node.js', 'Supabase (PostgreSQL)', 'Postman', 'FHIR R4'],
        links: [{ label: 'Internal Project', url: '#' }]
    }
];

export const additionalContributions: AdditionalContribution[] = [
    { description: 'Replaced legacy middleware with high-performance RPC services and edge functions, improving data synchronization performance by up to 30%.' },
    { description: 'Built custom Node.js and Bash deployment tooling for zero-downtime database migrations, reducing manual deployment effort by over 70%.' },
    { description: 'Automated finance workflows using Microsoft Power Platform, streamlining reporting and email distribution across 40+ subsidiaries.' }
];

export const personalProjects: Project[] = [
    {
        title: 'Threelights Barbershop Platform',
        type: 'Full-Stack · Production',
        description:
            'A complete barbershop management platform featuring real-time scheduling, automated invoicing, AI catalogue integration, and Midtrans payment gateway. Achieved 91.5% UAT score across stakeholder testing.',
        stack: ['TypeScript', 'Deno', 'SvelteKit', 'Supabase', 'Midtrans'],
        links: [{ label: 'Live Site ↗', url: 'https://www.threelightsbarber.shop/' }]
    },
    {
        title: 'Rumah Akasha Venue Management',
        type: 'Full-Stack · Production',
        description:
            'Multi-role venue management system with RBAC for admin, staff, and customers. Handles real-time checklists, automated reservation workflows, and active business bookings.',
        stack: ['Laravel', 'MySQL', 'Go'],
        links: [{ label: 'GitHub ↗', url: 'https://github.com/1ELo/RumahAkasha' }]
    },
    {
        title: 'AR Geometry Solver',
        type: 'Research · AR/VR',
        description:
            'Augmented Reality app in Unity allowing students to explore 3D geometric shapes interactively — making mathematics tangible.',
        stack: ['Unity', 'C#', 'Blender', 'Figma'],
        links: [
            { label: 'GitHub ↗', url: 'https://github.com/1ELo/GeometrySolver' }
        ]
    }
];
