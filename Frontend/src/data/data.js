
import i20 from '../assets/download (1).jpg';
import focus from '../assets/download (2).jpg';
import golf from '../assets/download (3).jpg';
import tyota from '../assets/download (4).jpg';
import tyota1 from '../assets/download (5).jpg';
import tyota2 from '../assets/download (6).jpg';

const data = [
  {
    _id: '1',
    title: 'Hyundai i20',
    category: { _id: 'hatchback', name: 'Hatchback Cars' },
    description: 'A modern hatchback with great features and fuel economy.',
    image: i20,
    body: `The Hyundai i20 is one of the most compelling hatchbacks in its class.\n\nIt offers a refined interior, excellent fuel economy, and a smooth ride perfect for city and long-distance driving.\n\nWith bold exterior design and a packed feature list, the i20 continues to win over drivers everywhere.`,
    createdAt: '2025-01-10T10:00:00Z',
  },
  {
    _id: '2',
    title: 'Ford Focus',
    category: { _id: 'hatchback', name: 'Hatchback Cars' },
    description: 'Fun to drive and economical on every journey.',
    image: focus,
    body: `The Ford Focus has long been a favourite among driving enthusiasts.\n\nIts sharp handling, responsive steering, and comfortable cabin make it a joy on any road.\n\nEconomical and practical, it remains one of Europe's best-selling hatchbacks.`,
    createdAt: '2025-01-15T10:00:00Z',
  },
  {
    _id: '3',
    title: 'Volkswagen Golf',
    category: { _id: 'hatchback', name: 'Hatchback Cars' },
    description: 'Compact and practical — a timeless family favourite.',
    image: golf,
    body: `The Volkswagen Golf is the benchmark by which all hatchbacks are measured.\n\nWith a premium interior, refined ride quality, and a wide range of efficient engines, it suits every type of driver.\n\nDecades of refinement make it a timeless classic.`,
    createdAt: '2025-01-20T10:00:00Z',
  },
  {
    _id: '4',
    title: 'Toyota RAV4',
    category: { _id: 'suv', name: 'SUV Cars' },
    description: 'Rugged yet refined with best-in-class cargo space.',
    image: tyota,
    body: `The Toyota RAV4 is a rugged yet refined SUV built for adventure.\n\nWith impressive all-wheel drive, generous cargo space, and Toyota's legendary reliability, it handles everything from school runs to off-road trails.\n\nA true all-rounder.`,
    createdAt: '2025-02-01T10:00:00Z',
  },
  {
    _id: '5',
    title: 'Honda Civic',
    category: { _id: 'sedan', name: 'Sedan Cars' },
    description: 'Sets the benchmark for compact sedans worldwide.',
    image: tyota1,
    body: `The Honda Civic continues to set the standard for compact sedans.\n\nIts tech-forward interior, smooth powertrain, and outstanding build quality make it a top choice for commuters and families alike.\n\nReliable, stylish, and practical.`,
    createdAt: '2025-02-10T10:00:00Z',
  },
  {
    _id: '6',
    title: 'Porsche 911',
    category: { _id: 'sports', name: 'Sports Cars' },
    description: 'An icon of engineering — timeless, thrilling, unforgettable.',
    image: tyota2,
    body: `The Porsche 911 needs no introduction.\n\nDecades of motorsport heritage distilled into one of the world's greatest sports cars.\n\nEvery curve, every detail, every rev of the engine is a reminder that this is automotive engineering at its absolute finest.`,
    createdAt: '2025-02-18T10:00:00Z',
  },
];

export default data;