export type Article = {
  id: number;
  headline: string;
  excerpt: string;
  publication: string;
  date: string;
  theme: string;
  url: string;
};

export const articles: Article[] = [
  {
    id: 16,
    headline: "Calling time on social washing in corporate culture and CSR",
    excerpt: "Why purpose needs to be embedded in workplace culture and corporate responsibility, rather than reduced to promises without meaningful action.",
    publication: "Mumbrella",
    date: "June 2024",
    theme: "People & Culture",
    url: "https://mumbrella.com.au/calling-time-on-social-washing-when-it-comes-to-investing-in-corporate-culture-and-csr-834653",
  },
  {
    id: 17,
    headline: "How to foster purpose and productivity while combating social washing",
    excerpt: "A practical look at the connection between genuine social purpose, employee engagement and productive workplace culture.",
    publication: "HR Leader",
    date: "July 2024",
    theme: "People & Culture",
    url: "https://www.hrleader.com.au/people/25661-how-to-foster-purpose-and-productivity-while-combating-social-washing",
  },
  {
    id: 3,
    headline: "I road-tripped New Zealand's South Island in an RV with my 10-year-old",
    excerpt: "What I wish I had known before taking on an eight-day winter road trip as the only adult behind the wheel.",
    publication: "Social101",
    date: "August 2026",
    theme: "Travel & Adventure",
    url: "https://social101.com/i-road-tripped-new-zealands-south-island-in-a-star-rv-with-my-10-year-old-heres-what-i-wish-id-known-before-we-left/",
  },
  {
    id: 4,
    headline: "Bali with kids: The things I'd actually book again",
    excerpt: "The honest, practical guide to the family experiences worth the money, plus what I would skip next time.",
    publication: "Social101",
    date: "August 2026",
    theme: "Travel & Adventure",
    url: "https://social101.com/bali-with-kids-best-family-activities/",
  },
  {
    id: 5,
    headline: "I climbed the Sydney Harbour Bridge with my son during Vivid",
    excerpt: "A bucket-list Sydney experience became one of the memories we will keep forever.",
    publication: "Social101",
    date: "June 2026",
    theme: "Motherhood & ADHD",
    url: "https://social101.com/i-climbed-the-sydney-harbour-bridge-with-my-son-during-vivid-its-a-memory-well-keep-forever/",
  },
  {
    id: 6,
    headline: "Meet the founder rewriting the rules of inclusive beauty",
    excerpt: "Deepa Mani is building POC Beauty around products that understand melanin-rich skin and modern multicultural Australia.",
    publication: "Social101",
    date: "June 2026",
    theme: "People & Culture",
    url: "https://social101.com/meet-the-founder-rewriting-the-rules-of-inclusive-beauty-deepa-mani-of-poc-beauty/",
  },
  {
    id: 7,
    headline: "Bali as a single mum: A family-friendly adventure with Albie",
    excerpt: "The real version of travelling Bali as the only parent, from big adventures to the small moments in between.",
    publication: "Social101",
    date: "March 2025",
    theme: "Travel & Adventure",
    url: "https://social101.com/bali-as-a-single-mum-a-fun-family-friendly-adventure-with-albie/",
  },
  {
    id: 8,
    headline: "A candid review of the Disney Wonder",
    excerpt: "The highs, the surprises and the honest verdict after sailing from Sydney to Melbourne via Tasmania.",
    publication: "Social101",
    date: "February 2025",
    theme: "Travel & Adventure",
    url: "https://social101.com/a-candid-review-of-the-disney-cruise-wonder/",
  },
];

export const themes = [
  {
    title: "Travel & Adventure",
    description: "Immersive travel, honest family adventures and the places worth crossing the world for.",
  },
  {
    title: "Life & Reinvention",
    description: "First-person essays about starting again, identity, work, dating and life in your forties.",
  },
  {
    title: "Motherhood & ADHD",
    description: "The funny, difficult and rarely polished reality of single motherhood and a neurodivergent life.",
  },
  {
    title: "People & Culture",
    description: "Interviews, profiles and stories about founders, communities and ideas changing how we live.",
  },
];

export const brands = [
  {
    title: "Social101",
    description: "The independent culture, travel and lifestyle publication Lisa founded in 2010.",
    url: "https://social101.com",
  },
  {
    title: "Comms 101",
    description: "Lisa's publicity and earned-media consultancy, built for stories that deserve attention.",
    url: "/work",
  },
  {
    title: "OneAnother",
    description: "The technology layer behind real-world community, helping people find their people and community leaders build belonging.",
    url: "https://oneanother.community",
  },
];