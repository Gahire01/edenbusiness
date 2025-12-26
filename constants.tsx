
import React from 'react';
import { Product, Review } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Industrial Precision Moldings',
    category: 'Manufacturing',
    description: 'High-tolerance molding solutions for automotive and aerospace sectors.',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
    specifications: ['High-Grade Steel', 'Tolerance ±0.01mm', 'ISO 9001 Certified']
  },
  {
    id: '2',
    name: 'Custom Architectural Fittings',
    category: 'Design',
    description: 'Bespoke steel and aluminum fittings for luxury residential projects.',
    imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800',
    specifications: ['Powder Coated Finish', 'Corrosion Resistant', 'Custom Dimensions']
  },
  {
    id: '3',
    name: 'Automated Processing Units',
    category: 'Engineering',
    description: 'Full-scale automated assembly line components for large-scale production.',
    imageUrl: 'https://images.unsplash.com/photo-1565173293028-0917637f1e60?auto=format&fit=crop&q=80&w=800',
    specifications: ['PLC Integration', 'Energy Efficient', 'Smart Monitoring']
  },
  {
    id: '4',
    name: 'Metal Fabrication Systems',
    category: 'Manufacturing',
    description: 'Advanced laser cutting and CNC machining for complex metal parts.',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800',
    specifications: ['Fiber Laser Tech', 'Multi-axis CNC', 'Fast Turnaround']
  }
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    author: "David Kamau",
    rating: 5,
    text: "EDEN Business Center consistently delivers high-quality parts on time. Their precision is unmatched in Nairobi.",
    role: "Project Manager, BuildSafe Kenya"
  },
  {
    id: 2,
    author: "Sarah Wanjiku",
    rating: 5,
    text: "The architectural fittings they manufactured for our Runda project were exquisite. Professional service from start to finish.",
    role: "Lead Architect, Modern Living"
  },
  {
    id: 3,
    author: "Samuel Otieno",
    rating: 4,
    text: "Reliable manufacturing partner. We've used them for our automated systems and the quality is excellent.",
    role: "CTO, AgriTech Solutions"
  }
];
