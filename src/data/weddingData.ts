import {
  GoldenHourTile,
  PortfolioItem,
  FilmItem,
  Testimonial,
  FaqItem,
  JournalArticle,
  PackageTier,
} from '../types';

export const HERO_VIDEO_URL =
  'https://static.readdy.ai/video/2f9a7952aef91e27a5ff96d0d5b98271/6b8f5d621be5e96d659ad44e8857c0ab.mp4';
export const HERO_POSTER_URL =
  '/src/assets/images/hero_wedding_golden_hour_1791796143879.jpg';

export const GOLDEN_HOUR_TILES: GoldenHourTile[] = [
  {
    id: 'gh-1',
    title: 'The First Look',
    location: 'Golden field · Chandigarh',
    image: '/src/assets/images/hero_wedding_golden_hour_1791796143879.jpg',
    alt: 'Couple embracing in wild grass field during golden hour sunset',
    span: 's3',
    camera: 'Leica SL2',
    lens: 'Summilux-SL 50mm f/1.4',
    settings: '1/1250s at f/1.6, ISO 100',
    story:
      'Just twenty minutes before twilight, the Punjab plains turn to liquid amber. We stepped away from the crowd into the mustard field for unhurried, quiet glances.',
  },
  {
    id: 'gh-2',
    title: 'Sun Through The Veil',
    location: 'Bridal portrait · Jaipur',
    image: '/src/assets/images/bridal_veil_sunset_1791796159607.jpg',
    alt: 'Bridal portrait with glowing veil in warm sunset backlight',
    span: 's3',
    camera: 'Sony A1',
    lens: 'GM 85mm f/1.4',
    settings: '1/2000s at f/1.4, ISO 80',
    story:
      'The light caught the golden Zardozi embroidery along the dupatta edge, casting intricate lace shadows across her profile overlooking the Pink City.',
  },
  {
    id: 'gh-3',
    title: 'Hands & Rings',
    location: 'Detail · Udaipur',
    image: '/src/assets/images/couple_hands_rings_1791796176554.jpg',
    alt: 'Close up of wedding couple hands holding with rings and henna',
    span: 's2',
    camera: 'Hasselblad X2D',
    lens: 'XCD 90mm f/2.5',
    settings: '1/800s at f/2.8, ISO 64',
    story:
      'Dark henna stain still fragrant, freshly slipped solitaire and gold band, fingers trembling gently right after the sacred pheras.',
  },
  {
    id: 'gh-4',
    title: 'The Palace Walk',
    location: 'Portrait session · Goa',
    image: '/src/assets/images/editorial_couture_bride_1791796209147.jpg',
    alt: 'Couture bride walking through royal marble palace corridor',
    span: 's2',
    camera: 'Leica M11',
    lens: 'Noctilux 50mm f/0.95',
    settings: '1/1600s at f/1.2, ISO 100',
    story:
      'Marble pillars reflecting warm morning sea air. An editorial pause between the sangeet night and the morning seaside vows.',
  },
  {
    id: 'gh-5',
    title: 'The First Dance',
    location: 'Reception · Delhi',
    image: '/src/assets/images/ceremony_string_lights_1791796191937.jpg',
    alt: 'Wedding couple first dance under warm string lights at dusk',
    span: 's2',
    camera: 'Sony FX3',
    lens: '35mm GM f/1.4',
    settings: '1/250s at f/1.8, ISO 640',
    story:
      'A canopy of a thousand hand-strung filament bulbs illuminating the courtyard stone while their favourite acoustic track played in the background.',
  },
  {
    id: 'gh-6',
    title: 'Last Light Together',
    location: 'Destination wedding · Bali',
    image: '/src/assets/images/hero_wedding_golden_hour_1791796143879.jpg',
    alt: 'Wide panorama of wedding couple on cliffside at sunset',
    span: 's6',
    camera: 'ARRI Alexa Mini LF',
    lens: 'Anamorphic Cooke 40mm',
    settings: 'T2.3, 800 EI, Natural Golden Hour',
    story:
      'The sun dropped into the Indian Ocean in less than four minutes. They stood without speaking, soaking in the realization that they were husband and wife.',
  },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'port-1',
    title: 'Simran & Kabir',
    category: 'weddings',
    location: 'The Oberoi Udaivilas, Udaipur',
    year: '2025',
    image: '/src/assets/images/ceremony_string_lights_1791796191937.jpg',
    alt: 'Simran and Kabir royal wedding celebration in Udaipur',
    description:
      'A 3-day royal Rajasthani celebration steeped in family warmth, candid tears, and an illuminated courtyard mandap reflected across Lake Pichola.',
    count: '980 Delivered Photos · 18 min Film',
    featured: true,
  },
  {
    id: 'port-2',
    title: 'Avani & Siddharth',
    category: 'pre-wedding',
    location: 'Kashmir Valley & Gulmarg',
    year: '2025',
    image: '/src/assets/images/hero_wedding_golden_hour_1791796143879.jpg',
    alt: 'Avani and Siddharth pre-wedding in Kashmir',
    description:
      'An intimate editorial love story shot amidst pine forests and snowy meadows. Unhurried conversations captured through fine-art film lenses.',
    count: '240 Selected Stills · 4 min Teaser',
    featured: true,
  },
  {
    id: 'port-3',
    title: 'The Royal Heirloom',
    category: 'editorial',
    location: 'Rambagh Palace, Jaipur',
    year: '2024',
    image: '/src/assets/images/editorial_couture_bride_1791796209147.jpg',
    alt: 'Royal heirloom bridal couture magazine spread',
    description:
      'Featured in Vogue Weddings: A study of traditional handloom silks, polki heirlooms, and architectural shadow play inside century-old palace archways.',
    count: '42 Editorial Master Plates',
    featured: true,
  },
  {
    id: 'port-4',
    title: 'Tarun & Meera',
    category: 'weddings',
    location: 'Sukhvilas, Chandigarh',
    year: '2024',
    image: '/src/assets/images/bridal_veil_sunset_1791796159607.jpg',
    alt: 'Tarun and Meera wedding in Chandigarh',
    description:
      'A heartfelt Anand Karaj at dawn, followed by sunset field portraits and a lantern-lit sangeet that danced well past 4 AM.',
    count: '1,120 Stills · 22 min Film',
  },
  {
    id: 'port-5',
    title: 'Rhea & Dev',
    category: 'pre-wedding',
    location: 'Lake Como, Italy',
    year: '2025',
    image: '/src/assets/images/couple_hands_rings_1791796176554.jpg',
    alt: 'Rhea and Dev Lake Como engagement',
    description:
      'Vintage wooden speedboats, cobbled alleys of Bellagio, and an intimate golden hour picnic on the stone balustrades of Villa del Balbianello.',
    count: '310 Photos · 5 min Film',
  },
  {
    id: 'port-6',
    title: 'Whispers in Crimson',
    category: 'editorial',
    location: 'Taj Falaknuma Palace, Hyderabad',
    year: '2025',
    image: '/src/assets/images/bridal_veil_sunset_1791796159607.jpg',
    alt: 'Couture bride portrait in Falaknuma',
    description:
      'A couture campaign capturing the balance between heritage opulence and the modern bride’s confident stillness.',
    count: '38 Magazine Spreads',
  },
];

export const FILM_ITEMS: FilmItem[] = [
  {
    id: 'film-1',
    title: 'The Light That Waited',
    tagline: 'A 22-minute documentary poem',
    category: 'feature',
    duration: '22:40',
    couple: 'Pargat & Pavneet',
    location: 'Taj Chandigarh & Family Farm',
    venue: 'Chandigarh, India',
    poster: '/src/assets/images/ceremony_string_lights_1791796191937.jpg',
    videoUrl: HERO_VIDEO_URL,
    synopsis:
      'Pargat and Pavneet grew up four villages apart in Punjab before meeting ten years later in London. Their wedding film pairs candid laughter with original folk ballads recorded live at their sangeet.',
    directorNote:
      'We wanted the sound design to carry the weight of real memory. When Pavneet hugs her grandmother during the vidai, we lowered all background music to keep only the sound of their breath and rain on the tin roof.',
    palette: ['#1c1814', '#b65c44', '#c9a46a', '#fdfbf7'],
  },
  {
    id: 'film-2',
    title: 'Echoes of the Coast',
    tagline: 'A 4-minute pre-wedding visual poem',
    category: 'short',
    duration: '04:15',
    couple: 'Navjot & Sukhman',
    location: 'Vagator Cliffs & Morjim Beach',
    venue: 'Goa, India',
    poster: '/src/assets/images/hero_wedding_golden_hour_1791796143879.jpg',
    videoUrl: HERO_VIDEO_URL,
    synopsis:
      'Shot on vintage anamorphic glass, this short story explores the quiet moments before guests arrive — salty breeze, handwritten letters read aloud, and dancing barefoot as the tide rolls in.',
    directorNote:
      'Zero staged acting. We gave them forty minutes alone on the cliffside with a telephoto lens from thirty meters away.',
    palette: ['#0f172a', '#e5927d', '#dbbb84', '#faf6f4'],
  },
  {
    id: 'film-3',
    title: 'Two Rivers Converge',
    tagline: 'Full wedding cinema feature',
    category: 'feature',
    duration: '18:50',
    couple: 'Manpreet & Bianca',
    location: 'Florence & Lucca',
    venue: 'Tuscany, Italy',
    poster: '/src/assets/images/editorial_couture_bride_1791796209147.jpg',
    videoUrl: HERO_VIDEO_URL,
    synopsis:
      'A cross-cultural celebration bridging traditional Punjabi rituals with an Italian countryside banquet under century-old olive groves.',
    directorNote:
      'The juxtaposition of dhol beats echoing against Renaissance stone walls made this one of the most musically exhilarating edits in our studio history.',
    palette: ['#1c1814', '#783726', '#e8d0a5', '#efe2c8'],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    names: 'Pargat & Pavneet',
    location: 'Chandigarh',
    venue: 'Taj Chandigarh',
    quote:
      'Sunny and the Aura team are masters of their craft. They made us feel completely at ease and captured moments we did not even know were happening. Our film still makes us weep every anniversary.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5,
  },
  {
    id: 't-2',
    names: 'Navjot & Sukhman',
    location: 'Jaipur',
    venue: 'Alila Fort Bishangarh',
    quote:
      'Such an artistic eye and gentle presence. They found the perfect angle, lighting and expressions in every single frame without ever turning our wedding into a staged movie set.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
  },
  {
    id: 't-3',
    names: 'Manpreet & Bianca',
    location: 'Goa',
    venue: 'W Goa Beach Resort',
    quote:
      'Fantastic group, exceptional work. We were blown away by both the photos and the feature film. They fulfilled every single wish, and the delivery was impeccably organized.',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    rating: 5,
  },
  {
    id: 't-4',
    names: 'Amrita & Viraj',
    location: 'Delhi',
    venue: 'ITC Grand Bharat',
    quote:
      'I can say without hesitation that Aura is among the finest wedding studios in the world. Professional, kind, and they captured our wedding exactly the way we had dreamed it.',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80',
    rating: 5,
  },
  {
    id: 't-5',
    names: 'Jaskirat & Sujinder',
    location: 'Bali',
    venue: 'The Mulia, Nusa Dua',
    quote:
      'It rained heavily right before our pheras, and the team turned it into pure poetry. The reflections on the wet courtyard and the morning sunrise beach portraits are treasures we will pass down for generations.',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80',
    rating: 5,
  },
  {
    id: 't-6',
    names: 'Manya & Naman',
    location: 'Ludhiana',
    venue: 'Hyatt Regency',
    quote:
      'From the raw teasers to the bespoke leather albums, everything feels like a fairytale when it arrives. Their work is so moving that our extended family keeps watching our film on a loop.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    rating: 5,
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Where are you based, and do you travel for weddings?',
    answer:
      'We are a boutique studio based out of Chandigarh, India, covering celebrations worldwide. Destination weddings are central to our work — we have documented love stories across 32 countries including Italy, Bali, Thailand, the UK, UAE, and the USA.',
    category: 'Logistics',
  },
  {
    id: 'faq-2',
    question: 'How would you describe your photography & film style?',
    answer:
      'Warm, candid, and cinematic. We prioritize natural emotion and unposed human connections rather than a rigid shot list. In post-production, every frame is graded with a hand-curated film look so your album feels timeless decades from now.',
    category: 'Style',
  },
  {
    id: 'faq-3',
    question: 'Can we book both photography and films together?',
    answer:
      'Yes, and we strongly recommend it. Our in-house photography and cinematography teams have worked alongside each other for years. A unified crew avoids competing for light and ensures your stills and films share the same color palette and storytelling voice.',
    category: 'Services',
  },
  {
    id: 'faq-4',
    question: 'Do you offer pre-wedding and engagement shoots?',
    answer:
      'Absolutely. Pre-wedding sessions are among our favorite creative explorations. We work with you on mood boards, location scouting, styling advice, and pacing so you feel relaxed and confident before the wedding day.',
    category: 'Services',
  },
  {
    id: 'faq-5',
    question: 'How far in advance should we book our wedding date?',
    answer:
      'Most couples book 8 to 14 months in advance, especially for the winter wedding season (October to March). Because we take a strictly limited number of weddings each year to preserve creative focus, dates are reserved on a first-come basis.',
    category: 'Booking',
  },
  {
    id: 'faq-6',
    question: 'What is the booking process and deposit requirement?',
    answer:
      'Once we verify your date availability, we prepare a tailored proposal tailored to your events. A signed agreement and a 30% booking deposit lock your dates exclusively on our studio calendar.',
    category: 'Booking',
  },
  {
    id: 'faq-7',
    question: 'What do we receive at the end and what are the delivery timelines?',
    answer:
      'You receive a private online digital gallery of high-resolution, fully retouched images within 6–8 weeks, a 60-second teaser within 7 days of the wedding, and your full cinematic film feature (15–25 mins) within 10–12 weeks. Printed fine-art heirloom albums follow proofing.',
    category: 'Deliverables',
  },
  {
    id: 'faq-8',
    question: 'What is your travel and accommodation policy?',
    answer:
      'For outstation and destination weddings, client arrangements cover return flights/transportation, comfortable hotel accommodation for the crew, and local transfers. We keep our travel footprint lean with minimal unnecessary luggage.',
    category: 'Logistics',
  },
];

export const PRESS_MENTIONS = [
  'VOGUE WEDDINGS',
  'The Bridal Times',
  'Harper & Co.',
  'WEDLUXE',
  'WeddingSutra',
  'MARIAGE',
  'BRIDES TODAY',
  'Couture Bride',
];

export const PACKAGE_TIERS: PackageTier[] = [
  {
    id: 'pkg-essential',
    name: 'The Heirloom Stills',
    idealFor: 'Single or Two-day celebrations focused on timeless documentary photography',
    priceEstimate: '₹2,75,000 / $3,300',
    inclusions: [
      '2 Senior Candid Photographers',
      '1 Traditional Portrait Specialist',
      'Up to 14 Hours of Coverage across 2 days',
      'Full Digital Gallery (600+ retouched plates)',
      '1 Handcrafted Leather Fine Art Album (40 spreads)',
      'Online Private Client Showcase for 1 year',
    ],
  },
  {
    id: 'pkg-complete',
    name: 'The Cinema & Stills Anthology',
    idealFor: 'Multi-day grand celebrations wanting cohesive film and photographic coverage',
    priceEstimate: '₹4,85,000 / $5,800',
    popular: true,
    inclusions: [
      'Lead Photographer + 2 Associate Photographers',
      'Director of Cinematography + 2 Film Shooters',
      'Licensed 4K Aerial Drone Coverage',
      '15-25 Minute Cinematic Wedding Film',
      '3-4 Minute Social Highlights Trailer (7-day delivery)',
      'Full ceremony and speeches live documentary cut',
      '2 Fine Art Heirloom Albums + Parent Mini Albums',
    ],
  },
  {
    id: 'pkg-destination',
    name: 'The Destination Grand Odyssey',
    idealFor: 'International or Palatial 3-4 day weddings with pre-wedding portrait day',
    priceEstimate: '₹7,50,000 / $9,000',
    inclusions: [
      'Complete Studio Principal Crew (Photo & Cinema)',
      'Dedicated Half-Day Pre-Wedding Editorial Shoot',
      'Same-Day Edit (SDE) Video for the Reception Banquet',
      '20-30 Minute Director’s Cut Feature Film with live audio mix',
      '3 Bespoke Italian Leather Albums',
      'Archival Raw Footage Drive & Lifetime Cloud Vault',
    ],
  },
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: 'j-1',
    title: 'The Art of Not Posing: How We Capture Real Tears & Genuine Laughter',
    date: 'February 2026',
    category: 'Philosophy & Craft',
    readTime: '5 min read',
    location: 'Studio Journal',
    excerpt:
      'Why the most treasured wedding photographs are almost always the ones you never knew we were taking.',
    content:
      'When you ask couples thirty years after their wedding which photographs they look at most, they rarely point to the formal family lineups. They point to the moment the groom whispered something funny during the solemn vows, or the bride’s mother wiping a tear with the corner of her pallu while pretending she wasn’t crying. Our philosophy centers on creating space for you to simply exist in your day.',
    image: '/src/assets/images/hero_wedding_golden_hour_1791796143879.jpg',
  },
  {
    id: 'j-2',
    title: 'Timing Your Wedding Timeline for Golden Hour Magic',
    date: 'January 2026',
    category: 'Planning Guide',
    readTime: '6 min read',
    location: 'Jaipur & Udaipur',
    excerpt:
      'A practical photographer’s guide to carving out 25 undisturbed minutes with your partner before the sun drops.',
    content:
      'In Indian weddings where itineraries often run behind schedule, sunset is the one guest that never waits. We break down how to coordinate your makeup artist, hair touch-ups, and cocktail entry so you never miss the thirty golden minutes that define your album.',
    image: '/src/assets/images/bridal_veil_sunset_1791796159607.jpg',
  },
  {
    id: 'j-3',
    title: 'Sound Design in Wedding Films: Why What You Hear Matters as Much as What You See',
    date: 'December 2025',
    category: 'Cinematography',
    readTime: '4 min read',
    location: 'Aura Sound Lab',
    excerpt:
      'From the clinking of kaleerein to whispered vows, how bespoke soundscapes elevate a wedding video into cinema.',
    content:
      'Cinema is 50% sound. A generic pop song slapped over slow-motion footage can never replicate the trembling breath of a father giving his blessing or the collective gasp when the curtain drops at the mandap.',
    image: '/src/assets/images/ceremony_string_lights_1791796191937.jpg',
  },
];
