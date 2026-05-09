export interface Publication {
    title: string;
    venue: string;
    year: number;
    summary: string;
    url: string;
}

export const publications: Publication[] = [
    {
        title: 'Deep Learning Method for Sign Language Recognition: A Systematic Literature Review',
        venue: 'ICIMTech 2024',
        year: 2024,
        summary:
            'Systematic review of 14 deep learning studies on sign language recognition. Highlights ResNet-50 at 99.98% accuracy and charts a path for AI-driven assistive communication systems.',
        url: 'https://doi.org/10.1109/ICIMTech63123.2024.10780830'
    },
    {
        title: "Refining Interface of the Indonesian Ministry of Health's Website Based on User Experience Questionnaire (UEQ)",
        venue: 'IConTINE · AIP Publishing',
        year: 2025,
        summary:
            "Evaluated the UX of Indonesia's national health portal across 6 UX dimensions. Delivered actionable redesign recommendations to improve access to critical public health information.",
        url: 'https://doi.org/10.1063/5.0268911'
    },
    {
        title: 'Implementing Augmented Reality to Address Cultural Appropriation Issue',
        venue: 'ICCSCI 2023 · Elsevier',
        year: 2023,
        summary:
            'AR application immersing users in Indonesian cultural heritage through virtual scenes of Bali and Papua. Strong usability test results; published in Elsevier proceedings.',
        url: 'https://doi.org/10.1016/j.procs.2023.10.581'
    }
];
