// Content sourced from tandonrealestate.com.au
// Photos mirrored locally from the agency's VaultRE feed (public/images/properties)
const V = id => `/images/properties/${id.toLowerCase().replace(/\.jpeg$/, '.jpg')}`;

export const site = {
  name: 'Tandon Real Estate',
  legal: 'Tandon Real Estate Pty Ltd',
  url: 'https://tandonrealestate.com.au',
  tagline: 'Your Local Real Estate Agency in Melbourne',
  description: 'Tandon Real Estate is a local real estate agency in Werribee and Point Cook, notable for its professional knowledge and exceptional service and advice.',
  phone: '+61 434 435 559',
  phone2: '+61 423 217 247',
  email: 'prashant@tandonrealestate.com.au',
  offices: [
    { label: 'Melbourne Office', line: '118/1 Queens Road, Melbourne, VIC 3004' },
    { label: 'Werribee Office', line: '25 Cheyne St Werribee, Vic 3030' },
  ],
  whatsapp: 'https://wa.me/61434435559',
  social: {
    Facebook: 'https://www.facebook.com/tandonrealestate/',
    Instagram: 'https://www.instagram.com/tandonrealestate/',
    LinkedIn: 'https://www.linkedin.com/company/tandonrealestate/',
    YouTube: 'https://www.youtube.com/channel/UCuk-qIEzL7J5RuP5VfTg5RQ',
    X: 'https://twitter.com/real_tandon',
  },
};

export const menu = [
  { href: '/', label: 'Home' },
  { href: '/real-estate-agency-in-melbourne', label: 'About Us' },
  { href: '/property-appraisal', label: 'Property Appraisal' },
  { href: '/new-land-developments', label: 'New Land Development' },
  { href: '/properties', label: 'Properties' },
  { href: '/speak-to-an-expert', label: 'Contact Us' },
  { href: '/blog', label: 'Blog' },
];

export const suburbs = ['Bacchus Marsh', 'Beveridge', 'Craigieburn', 'Deanside', 'East Geelong', 'Hoppers Crossing', 'Lara', 'Little River', 'Maddingley', 'Manor Lakes', 'Maribyrnong', 'Melbourne', 'Mount Duneed', 'Point Cook', 'Rockbank', 'Tarneit', 'Thornhill Park', 'Werribee', 'Williams Landing', 'Wyndham Vale'];

export const listings = [
  { slug: 'lot-20338-ardsley-street-manor-lakes-vic', title: 'Lot 20338 Ardsley Street', suburb: 'Manor Lakes VIC', type: 'Land', status: 'Sale', price: 'Nomination Land or Sale', land: '400 sqm',
    img: V('141866880__1743164559-111302-IMG9593.JPG'), gallery: [V('141866880__1743164559-111302-IMG9593.JPG'), V('141866879__1743164557-111094-IMG9594.JPG')],
    blurb: 'TRE proudly presents this beautiful nomination land in Manor Lakes! Location is key and the new Ison Road bridge is not far away from completion, connecting you to the Princes Freeway.',
    features: ['Wyndham Vale Train Station & local bus interchange', 'Manor Lakes Central Shopping Centre incl. Coles, Medical Centre & Pharmacy', 'Close to schools and childcare'] },
  { slug: '105-carr-street-east-geelong-vic', title: '105 Carr Street', suburb: 'East Geelong VIC', type: 'Land', status: 'Sale', price: '$690,000 – $740,000', land: '545 sqm',
    img: '/images/land.jpg', gallery: ['/images/land.jpg'],
    blurb: 'A good opportunity for investors and developers in this prime East Geelong location.' },
  { slug: '42-millbrook-drive-wyndham-vale-vic', title: '42 Millbrook Drive', suburb: 'Wyndham Vale VIC', type: 'House', status: 'Sale', price: '$500,000', beds: 3, baths: 2, land: '252 sqm', year: 2020,
    img: V('138531202__1741291511-108974-IMG9139.JPG'),
    gallery: ['138531194__1741291505-108927-IMG9135.JPG', '138531196__1741291506-109071-IMG9136.JPG', '138531198__1741291508-109010-IMG9137.JPG', '138531200__1741291510-108908-IMG9138.JPG', '138531202__1741291511-108974-IMG9139.JPG', '138531203__1741291513-109005-IMG9140.JPG', '138531205__1741291514-109023-IMG9141.JPG', '138531209__1741291518-108958-IMG9143.JPG'].map(V),
    blurb: 'A premium and modern house in Wyndham Vale, built in 2020 — low maintenance living close to everything.' },
  { slug: '31-wasim-circuit-rockbank-vic', title: '31 Wasim Circuit', suburb: 'Rockbank VIC', type: 'Land', status: 'Sale', price: '$450,000', land: '506 sqm',
    img: V('135665583__1739517222-194276-IMG8044.JPG'), gallery: [V('135665583__1739517222-194276-IMG8044.JPG'), V('135665585__1739517224-194138-IMG8045.JPG')],
    blurb: 'A premium parcel of land in Rockbank, suitable for a single or double-storey home.' },
  { slug: '9-armadale-court-tarneit-vic', title: '9 Armadale Court', suburb: 'Tarneit VIC', type: 'House', status: 'Sale', price: 'Contact Prashant', beds: 4, baths: 2, cars: 2, land: '560 sqm', year: 2009,
    img: V('134231206__1738673763-233210-IMG7527.JPG'),
    gallery: ['134231206__1738673763-233210-IMG7527.JPG', '134231205__1738673761-233358-IMG7526.JPG', '134231204__1738673757-232954-IMG7525.JPG', '134231207__1738673765-232961-IMG7531.JPG', '134231208__1738673767-233368-IMG7532.JPG', '134231209__1738673768-233182-IMG7533.JPG', '134231211__1738673778-234106-IMG7528.JPG'].map(V),
    blurb: 'A luxury and comfortable family home in a quiet Tarneit court.' },
  { slug: '403-45-edgewater-boulevard-maribyrnong-vic', title: '403/45 Edgewater Boulevard', suburb: 'Maribyrnong VIC', type: 'Apartment', status: 'Lease', price: 'Contact Prashant', beds: 2, baths: 2, year: 2014,
    img: V('131531497__1737374828-229129-Frame1702-2.jpg'), gallery: [V('131531497__1737374828-229129-Frame1702-2.jpg'), V('131531499__1737374976-228719-IMG7339.JPG')],
    blurb: 'An apartment for lease at Edgewater Boulevard, Maribyrnong — contact Prashant to secure this apartment.' },
  { slug: '22-eltham-parade-manor-lakes-vic', title: '22 Eltham Parade', suburb: 'Manor Lakes VIC', type: 'House', status: 'Sale', price: 'Contact Prashant', beds: 4, baths: 2, cars: 2, land: '400 sqm', year: 2015,
    img: V('129711020__1735012233-150682-IMG4939.JPG'), gallery: ['129711020__1735012233-150682-IMG4939.JPG', '129711022__1735012235-150791-IMG4940.JPG', '129711025__1735012238-150871-IMG4938.JPG'].map(V),
    blurb: 'A modern family home in Manor Lakes.' },
  { slug: '75-curletts-road-lara-vic', title: '75 Curletts Road', suburb: 'Lara VIC', type: 'Acreage', status: 'Sale', price: 'Contact Prashant', beds: 3, baths: 2, cars: 2, land: '40,064 sqm',
    img: V('129433775__1734608132-207597-IMG4815.JPG'),
    gallery: ['129433775__1734608132-207597-IMG4815.JPG', '129433770__1734607995-207295-IMG4816.JPG', '129433772__1734608000-102694-HousephotoCurtletts.jpeg', '129433774__1734608007-207301-LivingroomCurtletts.jpeg', '129433776__1734608158-103039-KitchenCurtletts.jpeg', '129433773__1734608005-207098-BedroomCurtletts.jpeg'].map(V),
    blurb: 'Enjoy a perfect escape from city life on over 40,000 sqm in Lara. Contact Prashant for an inspection.' },
  { slug: '77-aristides-crescent-thornhill-park-vic', title: '77 Aristides Crescent', suburb: 'Thornhill Park VIC', type: 'Land', status: 'Sale', price: '$360,000', land: '377 sqm',
    img: V('128438795__1734039894-116967-IMG4737.JPG'), gallery: [V('128438795__1734039894-116967-IMG4737.JPG'), V('128438801__1734039897-117339-IMG4736.JPG')],
    blurb: 'An excellent opportunity in Thornhill Park.' },
];

export const services = [
  { title: 'Property Appraisal', href: '/property-appraisal', text: 'Do you know what your home or property is worth? Sell your property with Werribee, Melbourne’s #1 real estate brand. Book a free property appraisal — in person or virtually.' },
  { title: 'Rental Appraisal', href: '/property-appraisal', text: 'Interested to know the rental value of your property? We will look after your biggest asset. Contact the real estate experts.' },
  { title: 'Commercial Appraisal', href: '/property-appraisal', text: 'Understand the true market and rental value of your commercial asset with advice from our experienced team.' },
  { title: 'New Land Developments', href: '/new-land-developments', text: 'Explore new land estates & land releases for sale in Melbourne — Metro North, Metro West and Metro South-East.' },
];

export const team = [
  { name: 'Prashant Tandon', role: 'Director, Licensed Estate Agent', img: '/images/team-prashant.jpg', bio: 'Prashant is a finance professional with over 20 years of experience specialising in banking and finance.' },
  { name: 'Tanya Tian', role: 'Business Development Manager', img: '/images/team-tanya.jpg', bio: 'Tanya is an experienced Business Development Manager for the past 10 years, working with small businesses.' },
  { name: 'Stephen Murphy', role: 'Sales Manager', img: '/images/team-stephen.jpg', bio: 'With over 23 years in real estate sales, Stephen brings deep market experience to every campaign.' },
  { name: 'Sab Ayyappan', role: 'Sales Manager', img: '/images/team-sab.jpg', bio: 'A dedicated and enthusiastic real estate agent with excellent communication skills.' },
];

export const testimonials = [
  { name: 'Viren Mistry', role: 'House Seller', text: 'At various stages of selling my property at Keysborough I have consulted Prashant and always got precise recommendation which has helped me to sell the property at right price. Always helpful and you will get right advice which benefits you.' },
  { name: 'Sab Ayyappan', role: 'Sales Manager, Vic Prop', text: 'Prashant, the director, was a fantastic agent. He was incredibly knowledgeable about the real estate market, and he worked tirelessly to make sure that I got the best possible deal.' },
  { name: 'Robin Chacko', role: 'House Owner', text: 'Prashant is extremely professional and provides honest opinion on property matters. He provides exceptional customer service with regular follow ups and updates and has the best interest of the customer at heart.' },
  { name: 'Kartik Nadimpalli', role: 'House Owner', text: 'Prashant is very proactive and looks after my property with genuine interest including regular inspections and prompt response to any query. He is not like big brands where you get lost with agents and admin staff.' },
  { name: 'Vinoth Kumar', role: 'House Owner', text: 'Without doubt Prashant is the man to go to if you want to either buy a property or lease your property. If you just started to create a property portfolio he will guide you to the next level with so much ease.' },
  { name: 'Owena Yateman', role: 'Tenant', text: 'Without a doubt the best agent I’ve ever had the pleasure in dealing with. Any problems, fixes or issues he’s gotten fixed within a day, and he always makes sure the tenants come first.' },
  { name: 'Alejandro Palma', role: 'House Seller', text: 'I had the opportunity to recently be Prashant’s client and he was very professional and friendly at all times. He also has excellent customer service. I recommend him as your real estate agent.' },
  { name: 'Murphy Watt', role: 'Electrician', text: 'Prashant has been wonderful to deal with since we met last year. He is diligent with managing his trades, polite, transparent and great to work for. Highly recommend Tandon Real Estate!' },
  { name: 'Vishal Verma', role: 'House Owner', text: 'A great one stop shop. This guy never got me worried about anything on my property. We consider him more than family now. Won’t disappoint.' },
  { name: 'Norman Macauley', role: 'House Owner', text: 'Prashant is one of the best agents around — he helped my family relocate to a wonderful house, in a professional manner, as well as an all-round gentleman.' },
  { name: 'Imran B', role: 'House Owner', text: 'One of the key factors that sets Tandon Real Estate apart is their focus on building relationships with their clients — and a strong commitment to giving back to the community.' },
  { name: 'Andrea Wong', role: 'House Owner', text: 'Prashant’s experience and professionalism in real estate have made us stressless from day one. Highly recommended!!' },
];

export const posts = [
  { slug: 'free-property-appraisal-in-werribbee', title: 'Free Property Appraisal in Werribee', img: '/images/blog-appraisal.jpg', excerpt: 'A property appraisal is an estimate of price for your property in the current market — here’s what you get with Tandon Real Estate.',
    body: [
      'A property appraisal is an estimate of price for your property in the current market. A real estate agent in Werribee will also consider current competition, wider market trends, the property’s structure and its condition. Property appraisals are an excellent way of understanding your property’s potential market value at that point in time.',
      ['A comprehensive assessment of your property', 'Prashant Tandon, your local real estate agent in Werribee, will review your property and assess its key selling features — size, number of bedrooms and bathrooms, condition, fixtures and fittings, and the quality of any renovations.'],
      ['Assessment of your property’s location', 'We review your property’s appeal to potential buyers based on its proximity to amenities, schools, shops and desirable locations in Werribee.'],
      ['Recent local real estate sales', 'We analyse the current local market — what similar properties are for sale, and what sold in the last 90 days and for how much.'],
      ['Local property buyer insights', 'Our agents know what local buyers want and what they are prepared to pay more for, and will discuss specific ways you can add value to your property.'],
      'We believe our job is not just to sell your property — it is about selling your property for a premium price. In the process, we aim to create a relationship that will last a lifetime.',
    ] },
  { slug: 'how-to-get-maximum-value-for-property-appraisal-in-melbourne', title: 'How to Get Maximum Value for Your Property Appraisal in Melbourne', img: '/images/appraisal.jpg', excerpt: 'Five simple ways to boost your appraisal value before an agent comes to assess your home.',
    body: [
      'Before you get an agent to come and assess your home or investment property, there are a few things you might want to consider before you get your property appraisal in Melbourne.',
      ['1. Invest in curb appeal', 'Make the agent’s first impression count. Consider painting the facade, tidying the front yard and landscaping. A statement front door can have a big impact on buyers.'],
      ['2. Make minor updates that pay off', 'Avoid over-investing. Low-cost, value-adding projects include replacing tapware, painting windows and doors, polishing floorboards or replacing lighting.'],
      ['3. Compare your property with others', 'Visit nearby open inspections and auctions to understand what buyers are looking for — then invest in the updates that matter.'],
      ['4. Do a deep clean', 'A thorough clean can do wonders. An agent won’t be impressed if your property is dirty at your appraisal.'],
      ['5. Declutter and style', 'Help the agent — and future buyers — see the space, light and potential of every room.'],
    ] },
  { slug: 'why-it-pays-to-be-ready-a-guide-to-pre-approval', title: 'Why It Pays to Be Ready: A Guide to Pre-approval', img: '/images/blog-preapproval.jpg', excerpt: 'The ideal property might come along at any time, so it’s beneficial to have your finances in order.',
    body: [
      'The ideal property might come along at any time, so it’s beneficial to have your finances in order. If your home loan has been pre-approved, you will be able to move quickly when the perfect property becomes available.',
      ['What exactly is pre-approval?', 'Pre-approval practically confirms how much you can borrow. There are three vital components: an income assessment, a credit check, and confirmation of your deposit savings — including equity, a guarantor or a First Home Owner Grant.'],
      ['It tells you what you can borrow', 'Borrowing capacity depends on where you live, your spending, other loans or credit cards and even the age of your children. Pre-approval gives you assurance about what you can afford.'],
      ['Stay out of the queue', 'Loan response times differ by lender. Starting your application only after you’ve found a property risks losing out to other buyers.'],
    ] },
  { slug: 'due-diligence-checklist', title: 'Due Diligence Checklist for Home Buyers', img: '/images/blog-diligence.jpg', excerpt: 'What you need to know before buying a residential property in Victoria.',
    body: [
      'Before you buy a home, you should be aware of a range of issues that may affect that property and impose restrictions or obligations on you. This checklist is a starting point — you may need professional advice. More at consumer.vic.gov.au/duediligencechecklist.',
      ['Urban living', 'High density areas are attractive for entertainment and services, but bring increased traffic, noise and odours. Is the property subject to an owners corporation? You may need to pay fees and follow rules, such as a ban on pets.'],
      ['Growth areas', 'Investigate whether you will be required to pay a growth areas infrastructure contribution.'],
      ['Flood and fire risk', 'Properties may be subject to fire and flooding risk — consider implications for land management, buildings and insurance premiums.'],
      ['Rural properties', 'Is surrounding land use compatible with your lifestyle? Are there rules on removing native vegetation, managing weeds and pests, or building new dwellings?'],
    ] },
];

// Curated interior/exterior photos (no floor plans or signboards) for the hero collage & photo wall.
const P = (slug, id) => ({ slug, src: `/images/properties/${id}` });
export const photos = [
  P('9-armadale-court-tarneit-vic', '134231206__1738673763-233210-img7527.jpg'),
  P('75-curletts-road-lara-vic', '129433772__1734608000-102694-housephotocurtletts.jpg'),
  P('75-curletts-road-lara-vic', '129433773__1734608005-207098-bedroomcurtletts.jpg'),
  P('42-millbrook-drive-wyndham-vale-vic', '138531194__1741291505-108927-img9135.jpg'),
  P('9-armadale-court-tarneit-vic', '134231211__1738673778-234106-img7528.jpg'),
  P('9-armadale-court-tarneit-vic', '134231208__1738673767-233368-img7532.jpg'),
  P('75-curletts-road-lara-vic', '129433776__1734608158-103039-kitchencurtletts.jpg'),
  P('42-millbrook-drive-wyndham-vale-vic', '138531198__1741291508-109010-img9137.jpg'),
  P('42-millbrook-drive-wyndham-vale-vic', '138531205__1741291514-109023-img9141.jpg'),
  P('403-45-edgewater-boulevard-maribyrnong-vic', '131531499__1737374976-228719-img7339.jpg'),
  P('75-curletts-road-lara-vic', '129433775__1734608132-207597-img4815.jpg'),
  P('75-curletts-road-lara-vic', '129433774__1734608007-207301-livingroomcurtletts.jpg'),
  P('9-armadale-court-tarneit-vic', '134231207__1738673765-232961-img7531.jpg'),
  P('9-armadale-court-tarneit-vic', '134231205__1738673761-233358-img7526.jpg'),
  P('9-armadale-court-tarneit-vic', '134231209__1738673768-233182-img7533.jpg'),
  P('42-millbrook-drive-wyndham-vale-vic', '138531196__1741291506-109071-img9136.jpg'),
  P('42-millbrook-drive-wyndham-vale-vic', '138531200__1741291510-108908-img9138.jpg'),
  P('42-millbrook-drive-wyndham-vale-vic', '138531203__1741291513-109005-img9140.jpg'),
];
