/**
 * IntersectionObserver Svelte action for scroll-reveal animations.
 * Usage: <div use:intersect> or <div use:intersect={{ threshold: 0.2 }}>
 */
export function intersect(
    node: HTMLElement,
    options: { threshold?: number; rootMargin?: string; once?: boolean } = {}
) {
    const { threshold = 0.15, rootMargin = '0px 0px -60px 0px', once = true } = options;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    node.classList.add('is-visible');
                    if (once) observer.unobserve(node);
                } else if (!once) {
                    node.classList.remove('is-visible');
                }
            });
        },
        { threshold, rootMargin }
    );

    observer.observe(node);

    return {
        destroy() {
            observer.unobserve(node);
        }
    };
}
