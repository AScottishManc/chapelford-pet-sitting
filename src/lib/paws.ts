import type { IconName } from '../components/Icon/Icon.astro';

// Each service section's paw icon
const paws: Record<string, IconName> = { cats: 'paw-cat', dogs: 'paw-dog', 'other-pets': 'paw-rabbit' };

export const pawFor = (section: string): IconName => paws[section] ?? 'paw-cat';
