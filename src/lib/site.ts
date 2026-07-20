// Per-site brand config — the one file (plus tailwind colors, globals.css
// variables and content/articles.ts) that changes between sibling sites.
export const SITE = {
  id: 'xad-es',
  name: 'Xad',
  domain: 'xad.es',
  url: 'https://xad.es',
  tagline: 'Technology, decoded',
  description:
    "Clear, independent explainers on software, cybersecurity, cloud tools and the tech that runs modern life — practical guidance with no hype and no affiliate spin.",
  locale: 'en',
  heroLead: 'Technology,',
  heroAccent: 'decoded',
  adClient: 'ca-pub-6371903555702163',
  analyticsEndpoint: 'https://api.ulyah.com/track',
  adConfigEndpoint: 'https://api.ulyah.com/content/ad-config',
} as const;
