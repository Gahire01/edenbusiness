
export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  imageUrl: string;
  specifications: string[];
}

export interface Review {
  id: number;
  author: string;
  rating: number;
  text: string;
  role: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
