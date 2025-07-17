export interface WasteIdea {
  id: number;
  title: string;
  description: string;
  type: 'paper' | 'plastic' | 'textile' | 'glass' | 'metal' | 'medical-waste';
  difficulty: 'easy' | 'medium' | 'hard';
  timeRequired: string;
  materials: string[];
  steps: string[];
  image?: string;
}

export const wasteIdeas: WasteIdea[] = [
  // Paper Category
  {
    id: 1,
    title: 'Eco-Friendly Paper Notebooks',
    description: 'Create beautiful notebooks from recycled paper and cardboard.',
    type: 'paper',
    difficulty: 'easy',
    timeRequired: '1-2 hours',
    materials: ['Old paper', 'Cardboard', 'String', 'Needle', 'Decorative elements'],
    steps: [
      'Sort and clean recycled paper',
      'Cut papers to desired size',
      'Create cardboard covers',
      'Bind pages using string',
      'Decorate the covers'
    ],
    image: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    title: 'Paper Pulp Decorative Bowls',
    description: 'Create unique decorative bowls from paper pulp.',
    type: 'paper',
    difficulty: 'medium',
    timeRequired: '2 days',
    materials: ['Scrap paper', 'Water', 'Bowl mold', 'Paint', 'Sealant'],
    steps: [
      'Shred paper into small pieces',
      'Soak in water overnight',
      'Blend into pulp',
      'Shape using mold',
      'Let dry and decorate'
    ],
    image: 'https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    title: 'Paper Bead Jewelry',
    description: 'Transform old magazines into colorful beaded jewelry.',
    type: 'paper',
    difficulty: 'medium',
    timeRequired: '3-4 hours',
    materials: ['Magazines', 'Scissors', 'Glue', 'String or wire', 'Sealant'],
    steps: [
      'Cut magazine pages into triangles',
      'Roll triangles into beads',
      'Apply sealant',
      'String beads together',
      'Add clasps or findings'
    ],
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    title: 'Paper Mosaic Wall Art',
    description: 'Create stunning wall art using recycled paper in a mosaic pattern.',
    type: 'paper',
    difficulty: 'hard',
    timeRequired: '5-6 hours',
    materials: ['Colored paper', 'Canvas', 'Glue', 'Scissors', 'Frame'],
    steps: [
      'Design your mosaic pattern',
      'Cut paper into small pieces',
      'Arrange pieces on canvas',
      'Glue pieces in place',
      'Frame the finished artwork'
    ],
    image: 'https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?auto=format&fit=crop&w=800&q=80'
  },

  // Plastic Category
  {
    id: 5,
    title: 'Plastic Bottle Hydroponic System',
    description: 'Build a small-scale hydroponic system using plastic bottles.',
    type: 'plastic',
    difficulty: 'medium',
    timeRequired: '3-4 hours',
    materials: ['Large plastic bottles', 'Growing medium', 'Nutrients', 'Plants', 'Pump system'],
    steps: [
      'Clean and prepare bottles',
      'Create planting holes',
      'Set up irrigation system',
      'Add growing medium',
      'Plant and maintain'
    ],
    image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 6,
    title: 'Plastic Bottle Wind Spinner',
    description: 'Create colorful outdoor decorations from plastic bottles.',
    type: 'plastic',
    difficulty: 'easy',
    timeRequired: '1-2 hours',
    materials: ['Plastic bottles', 'Acrylic paint', 'Scissors', 'String', 'Beads'],
    steps: [
      'Cut bottle into spiral shape',
      'Paint the spiral',
      'Add decorative elements',
      'Attach string and beads',
      'Hang outdoors'
    ],
    image: 'https://imgs.search.brave.com/0ZwnRvO91BzuYFIxqefo8glgZFG_pIKhhgeDl4i8m7w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jcmFm/dHNieWFtYW5kYS5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTMvMDYvd2luZC1z/cGlubmVyLTMuanBn'
  },
  {
    id: 7,
    title: 'Plastic Container Organizers',
    description: 'Transform plastic containers into stylish desk organizers.',
    type: 'plastic',
    difficulty: 'easy',
    timeRequired: '2-3 hours',
    materials: ['Plastic containers', 'Spray paint', 'Decorative paper', 'Glue', 'Scissors'],
    steps: [
      'Clean containers thoroughly',
      'Sand surfaces if needed',
      'Apply spray paint',
      'Add decorative elements',
      'Organize into sets'
    ],
    image: 'https://imgs.search.brave.com/oKeBdtX8XJR3cAv85b6i5Y-Smlv7DlSyv8rOH_DSLuQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bGlmZXdpdC5jb20v/Y2RuL3Nob3AvcHJv/ZHVjdHMvbGlmZXdp/dC04cGNzLWZyaWRn/ZS1vcmdhbml6ZXIt/Ymlucy1lZ2ctaG9s/ZGVyLTU0M18zMDB4/LmpwZz92PTE2NTcy/NjUzODI'
  },
  {
    id: 8,
    title: 'Plastic Bottle Vertical Garden',
    description: 'Create a space-saving vertical garden using plastic bottles.',
    type: 'plastic',
    difficulty: 'medium',
    timeRequired: '4-5 hours',
    materials: ['Plastic bottles', 'Soil', 'Plants', 'Wire/rope', 'Drill'],
    steps: [
      'Cut bottles horizontally',
      'Create drainage holes',
      'Attach mounting system',
      'Fill with soil',
      'Plant and arrange'
    ],
    image: 'https://images.unsplash.com/photo-1582131503261-fca1d1c0589f?auto=format&fit=crop&w=800&q=80'
  },

  // Textile Category
  {
    id: 9,
    title: 'Textile Wall Art',
    description: 'Transform old clothing into stunning wall art pieces.',
    type: 'textile',
    difficulty: 'medium',
    timeRequired: '2-3 hours',
    materials: ['Old clothes', 'Canvas', 'Scissors', 'Glue', 'Frame'],
    steps: [
      'Select and sort fabrics',
      'Cut into desired shapes',
      'Arrange design',
      'Secure to canvas',
      'Frame the artwork'
    ],
    image: 'https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 10,
    title: 'Textile Plant Hangers',
    description: 'Craft beautiful macramé-style plant hangers from old t-shirts.',
    type: 'textile',
    difficulty: 'hard',
    timeRequired: '2-3 hours',
    materials: ['Old t-shirts', 'Scissors', 'Beads', 'Ring', 'Plants'],
    steps: [
      'Cut t-shirts into strips',
      'Create t-shirt yarn',
      'Knot basic pattern',
      'Add decorative elements',
      'Hang and style'
    ],
    image: 'https://images.unsplash.com/photo-1463320898484-cdee8141c787?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 11,
    title: 'Denim Patchwork Cushions',
    description: 'Create unique cushion covers from old jeans.',
    type: 'textile',
    difficulty: 'medium',
    timeRequired: '3-4 hours',
    materials: ['Old jeans', 'Scissors', 'Sewing machine', 'Thread', 'Cushion inserts'],
    steps: [
      'Cut jeans into squares',
      'Arrange pattern',
      'Sew patches together',
      'Create cushion cover',
      'Insert cushion'
    ],
    image: 'https://images.unsplash.com/photo-1528697203043-733dafdaa316?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 12,
    title: 'Textile Storage Baskets',
    description: 'Weave storage baskets from old fabric strips.',
    type: 'textile',
    difficulty: 'medium',
    timeRequired: '4-5 hours',
    materials: ['Old clothes', 'Scissors', 'Rope', 'Needle', 'Thread'],
    steps: [
      'Cut fabric into strips',
      'Create base structure',
      'Weave sides',
      'Add handles',
      'Reinforce edges'
    ],
    image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=80'
  },

  // Glass Category
  {
    id: 13,
    title: 'Upcycled Glass Jar Planters',
    description: 'Transform old glass jars into stunning planters for small plants or herbs.',
    type: 'glass',
    difficulty: 'easy',
    timeRequired: '1-2 hours',
    materials: ['Old glass jars', 'Paint', 'Soil', 'Plants', 'Decorative elements'],
    steps: [
      'Clean jars thoroughly',
      'Paint or decorate',
      'Add drainage layer',
      'Fill with soil',
      'Plant herbs or succulents'
    ],
    image: 'https://imgs.search.brave.com/ENq4pkYW2iCbo8m_eiBs07IGbD-zfnrMvTLD-dcLsYk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9iYWxj/b255Z2FyZGVud2Vi/LmItY2RuLm5ldC93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMS8w/My8yNG1hc29uLWph/ci5qcGc'
  },
  {
    id: 14,
    title: 'Glass Bottle Wind Chimes',
    description: 'Create melodic wind chimes from recycled glass bottles.',
    type: 'glass',
    difficulty: 'medium',
    timeRequired: '3-4 hours',
    materials: ['Glass bottles', 'Glass cutter', 'String', 'Beads', 'Hanging hardware'],
    steps: [
      'Cut bottles to size',
      'Sand edges smooth',
      'Drill hanging holes',
      'Assemble chimes',
      'Add decorative elements'
    ],
    image: 'https://imgs.search.brave.com/1SNYGuIth5nDTRH1IgDpmQSfDKT3hGunKjnjkHSV3r0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFMcjJIZHZYckwu/anBn'
  },
  {
    id: 15,
    title: 'Glass Mosaic Table Top',
    description: 'Design a beautiful mosaic table top using broken glass pieces.',
    type: 'glass',
    difficulty: 'hard',
    timeRequired: '6-8 hours',
    materials: ['Broken glass', 'Table top', 'Grout', 'Adhesive', 'Safety equipment'],
    steps: [
      'Sort glass by color',
      'Design pattern',
      'Attach glass pieces',
      'Apply grout',
      'Seal surface'
    ],
    image: 'https://images.unsplash.com/photo-1577401239170-897942555fb3?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 16,
    title: 'Glass Bottle Tiki Torches',
    description: 'Convert wine bottles into outdoor lighting features.',
    type: 'glass',
    difficulty: 'medium',
    timeRequired: '2-3 hours',
    materials: ['Wine bottles', 'Torch wicks', 'Mounting brackets', 'Fuel', 'Tools'],
    steps: [
      'Clean bottles',
      'Install wicks',
      'Mount brackets',
      'Fill with fuel',
      'Test and position'
    ],
    image: 'https://imgs.search.brave.com/vyBIErxL4jIWoETUm4q83ceD53h-Z2UmXdLrBRMNuW8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/ODFEVkZMQUI3Zkwu/anBn'
  },

  // Metal Category
  {
    id: 17,
    title: 'Tin Can Lanterns',
    description: 'Create decorative lanterns from recycled tin cans.',
    type: 'metal',
    difficulty: 'medium',
    timeRequired: '2-3 hours',
    materials: ['Tin cans', 'Hammer', 'Nail', 'Paint', 'Wire'],
    steps: [
      'Clean cans thoroughly',
      'Design pattern',
      'Punch holes',
      'Paint exterior',
      'Add hanging wire'
    ],
    image: 'https://imgs.search.brave.com/sV2j6ZB0dQo2R7Qcd1BRQbMCJqJvq6wI2G68-uNqu5Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzg4L2Y2/L2I5Lzg4ZjZiOWM3/MDAyYjc5OTRiMGNi/NTE4NzRmODg1YWFk/LS10aW4tY2FuLWxh/bnRlcm5zLXRpbi1j/YW5zLmpwZw'
  },
  {
    id: 18,
    title: 'Metal Art Sculptures',
    description: 'Build unique sculptures from scrap metal pieces.',
    type: 'metal',
    difficulty: 'hard',
    timeRequired: '5-6 hours',
    materials: ['Scrap metal', 'Welding equipment', 'Wire brush', 'Paint', 'Safety gear'],
    steps: [
      'Sort metal pieces',
      'Design sculpture',
      'Weld pieces together',
      'Clean surfaces',
      'Paint or finish'
    ],
    image: 'https://imgs.search.brave.com/TBdFtH4hQnirRvyAhnhyDqGrck812xrm2mL-jDdcbyw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2M5Lzlk/LzA1L2M5OWQwNTJk/MWJjNmU4OTdmZjQ2/MTQzZjljM2QyMDg4/LmpwZw'
  },
  {
    id: 19,
    title: 'Bottle Cap Table Top',
    description: 'Design a unique table top using collected bottle caps.',
    type: 'metal',
    difficulty: 'medium',
    timeRequired: '4-5 hours',
    materials: ['Bottle caps', 'Table top', 'Epoxy resin', 'Level', 'Sealant'],
    steps: [
      'Clean bottle caps',
      'Arrange pattern',
      'Secure caps',
      'Pour resin',
      'Allow to cure'
    ],
    image: 'https://imgs.search.brave.com/qviBLy-G11kVZm_1vTW_Z6rRx8PRBvzmBCGdKLSdXHc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzIwOTM1OTM5L2Mv/MTI2Ni8xMjY2LzAv/MC9pbC8zZWViYzIv/MzIyNzczNzI0Ny9p/bF82MDB4NjAwLjMy/Mjc3MzcyNDdfM28z/Mi5qcGc'
  },
  {
    id: 20,
    title: 'Metal Wind Spinners',
    description: 'Create kinetic garden art from recycled metal items.',
    type: 'metal',
    difficulty: 'medium',
    timeRequired: '3-4 hours',
    materials: ['Metal sheets', 'Wire', 'Tools', 'Paint', 'Bearings'],
    steps: [
      'Cut metal shapes',
      'Assemble structure',
      'Balance pieces',
      'Paint design',
      'Install outdoors'
    ],
    image: 'https://imgs.search.brave.com/wHAwhwF6j1OoNjEZrIOYgpAgo7pXYd1KNSAkCeOwz0Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudGhkc3RhdGlj/LmNvbS9wcm9kdWN0/SW1hZ2VzL2FlN2My/YWY1LTc0MTEtNDMy/NC1hNWI1LTg1Y2Uw/MThiN2YyMS9zdm4v/d29vZHN0b2NrLWNo/aW1lcy13aW5kLWNo/aW1lcy1icGxici02/NF8zMDAuanBn'
  },

];