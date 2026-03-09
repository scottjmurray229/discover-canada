import type { PackingItem, PackingConfig, GearRecommendation } from './packing-base';

export const CANADA_ESSENTIALS: PackingItem[] = [
  { id: 'ca-bearspray', name: 'Bear Spray (BC/Alberta)', category: 'destination', description: 'Required for any backcountry hiking in British Columbia and Alberta. Banff, Jasper, and any trail in bear country — carry it clipped to your hip, not buried in your pack.', essential: false, amazonSearchFallback: 'bear+spray+counter+assault', affiliatePrice: '$40–55' },
  { id: 'ca-layers', name: 'Layering System', category: 'destination', description: 'Canada\'s weather varies wildly by region and season. Vancouver is mild and rainy; Banff can snow in July; Toronto gets humid summers and brutal winters. Layers work everywhere.', essential: true, climate: ['cold', 'temperate'], amazonSearchFallback: 'packable+down+jacket+travel+lightweight', affiliatePrice: '$60–100' },
  { id: 'ca-waterproof', name: 'Waterproof Jacket', category: 'destination', description: 'Vancouver (150 rainy days/year), Nova Scotia coast, Niagara Falls spray — a waterproof layer works year-round from coast to coast.', essential: true, amazonSearchFallback: 'waterproof+rain+jacket+packable', affiliatePrice: '$50–100' },
  { id: 'ca-walkshoes', name: 'Comfortable Walking / Hiking Shoes', category: 'destination', description: 'Whether you\'re walking Montreal\'s Plateau, hiking Banff\'s Lake Louise trail, or exploring Tofino beaches — supportive footwear makes every Canadian experience better.', essential: true, amazonSearchFallback: 'hiking+walking+shoes+waterproof+trail', affiliatePrice: '$80–130' },
];

export const CANADA_GEAR_RECOMMENDATIONS: GearRecommendation[] = [
  { id: 'gr-ca-jacket', name: 'Packable Down Jacket', reason: 'Canada\'s temperature range is enormous — Banff can snow in July, Toronto winters hit -20°F with wind chill. A packable down jacket is the most versatile layer for any Canadian itinerary.', amazonSearchFallback: 'packable+down+jacket+lightweight+outdoor', affiliatePrice: '~$85' },
  { id: 'gr-ca-waterproof', name: 'Waterproof Jacket', reason: 'Vancouver gets 150 rainy days per year. The BC coast, Nova Scotia, and Newfoundland are wet. A waterproof shell is a year-round essential across most of Canada.', amazonSearchFallback: 'waterproof+rain+jacket+packable+outdoor', affiliatePrice: '~$65' },
  { id: 'gr-ca-boots', name: 'Waterproof Hiking Boots', reason: 'Banff trails, Gros Morne, West Coast Trail — Canadian backcountry is seriously wet and rugged. Waterproof hiking boots with ankle support handle everything from Rockies to Maritimes.', amazonSearchFallback: 'waterproof+hiking+boots+ankle+support', affiliatePrice: '~$130' },
  { id: 'gr-ca-bearspray', name: 'Bear Spray (BC/Alberta)', reason: 'Grizzly and black bear encounters are possible in BC and Alberta backcountry. Bear spray is more effective than firearms in a close encounter. Clip to hip, know how to use it.', amazonSearchFallback: 'bear+spray+hiking+canada+backcountry', affiliatePrice: '~$45' },
  { id: 'gr-ca-bottle', name: 'Reusable Water Bottle', reason: 'Canadian tap water and wilderness water sources are excellent. A good water bottle plus a filter for backcountry means you never need to buy plastic in Canada.', amazonSearchFallback: 'reusable+water+bottle+insulated+outdoor', affiliatePrice: '~$30' },
];

export const CANADA_CONFIG: PackingConfig = {
  sitePrefix: 'dcn',
  destination: 'Canada',
  climate: ['temperate', 'cold'],
  currency: 'CAD',
  plugType: 'Type A/B',
  plugVoltage: '120V',
  affiliateTag: 'discoverphili-20',
  destinationEssentials: CANADA_ESSENTIALS,
  gearRecommendations: CANADA_GEAR_RECOMMENDATIONS,
};

export const SITE_CONFIG = CANADA_CONFIG;

export const CANADA_PACKING_FAQS = [
  { question: 'What should I pack for Canada?', answer: 'Canada requires layering above all else — the country spans arctic to desert to rainforest. Key items: a packable down jacket (Banff can snow in July), waterproof jacket (Vancouver gets 150 rainy days), waterproof hiking boots for any trail, and bear spray for BC/Alberta backcountry. No international adapter needed — Canada uses US standard 120V outlets.' },
  { question: 'Do I need bear spray in Canada?', answer: 'Yes for any backcountry hiking in BC and Alberta — Banff, Jasper, and BC\'s provincial parks have active grizzly and black bear populations. Bear spray is more effective than firearms in a close encounter according to research. Clip it to your hip (not buried in your pack) and practice the draw. Available to rent at Banff outfitters.' },
  { question: 'What power adapter do I need for Canada?', answer: 'No adapter needed. Canada uses Type A/B outlets at 120V — identical to the US. All American devices work without any adapter or converter.' },
  { question: 'Can I buy outdoor gear in Canada?', answer: 'Yes — MEC (Mountain Equipment Company) is Canada\'s excellent outdoor retailer with stores in all major cities. Canadian Tire is everywhere for basics. Canadian outdoor gear selection is world-class, especially in Banff, Jasper, and Vancouver.' },
  { question: 'How many outfits should I pack for Canada?', answer: 'Pack for 5–7 days. Laundromats are widely available ($3–4/load). Most Airbnbs and vacation rentals have washers and dryers. Pack for the outdoor activities you\'re doing (hiking, skiing, kayaking) rather than formal wear — Canada is casual everywhere except some Montreal and Toronto restaurants.' },
  { question: 'What should I NOT bring to Canada?', answer: 'Cotton base layers for any outdoor activities (useless when wet and cold). Cheap rain gear (Canadian weather is serious about rain). Drone equipment near national parks without a permit (Parks Canada restricts drones throughout national parks). And don\'t underestimate winter cold — -20°F wind chills in Toronto and Ottawa are real.' },
];
