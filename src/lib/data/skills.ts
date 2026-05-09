export interface SkillGroup {
    icon: string;
    title: string;
    skills: string[];
}

export const skillGroups: SkillGroup[] = [
    {
        icon: '🌿',
        title: 'Languages',
        skills: ['TypeScript', 'JavaScript', 'Go', 'Python', 'C++', 'SQL', 'Dart', 'Kotlin']
    },
    {
        icon: '🌱',
        title: 'Frameworks & APIs',
        skills: ['Node.js', 'Deno', 'FastAPI', 'Flutter', 'SvelteKit', 'REST', 'RPC', 'Edge Functions']
    },
    {
        icon: '☁️',
        title: 'Cloud & DevOps',
        skills: ['Docker', 'Azure ML', 'Azure Blob', 'Git', 'Linux', 'k6', 'Shell/Bash']
    },
    {
        icon: '🔒',
        title: 'Security & Architecture',
        skills: ['AES-256-GCM', 'ECIES', 'JWT', 'Row Level Security', 'Microservices', 'API Design', 'System Design']
    },
    {
        icon: '🗄',
        title: 'Databases & Infra',
        skills: ['PostgreSQL', 'Redis', 'Supabase', 'Celery', 'MinIO', 'Trino']
    }
];
