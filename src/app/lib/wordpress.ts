// lib/wordpress.ts
const NEXT_PUBLIC_WP_API_URL_CLIENT = process.env.NEXT_PUBLIC_WP_API_URL_CLIENT;

if (!NEXT_PUBLIC_WP_API_URL_CLIENT) {
  throw new Error('WORDPRESS_API_URL is not defined in environment variables');
}

export interface WPPost {
  id: number;
  date: string;
  modified: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  excerpt: {
    rendered: string;
    protected: boolean;
  };
  author: number;
  featured_media: number;
  comment_status: string;
  ping_status: string;
  sticky: boolean;
  template: string;
  format: string;
  meta: string[];
  categories: number[];
  tags: number[];
  _embedded?: {
    author: Array<{
      id: number;
      name: string;
      url: string;
      description: string;
      link: string;
      slug: string;
      avatar_urls: {
        [size: string]: string;
      };
    }>;
    'wp:term': Array<Array<{
      id: number;
      link: string;
      name: string;
      slug: string;
      taxonomy: string;
    }>>;
    'wp:featuredmedia'?: Array<{
      id: number;
      date: string;
      slug: string;
      type: string;
      link: string;
      title: {
        rendered: string;
      };
      author: number;
      caption: {
        rendered: string;
      };
      alt_text: string;
      media_type: string;
      mime_type: string;
      media_details: {
        width: number;
        height: number;
        file: string;
        sizes: {
          [size: string]: {
            file: string;
            width: number;
            height: number;
            mime_type: string;
            source_url: string;
          };
        };
        image_meta: string;
      };
      source_url: string;
      _links: string;
    }>;
  };
}

export interface WPCategory {
  id: number;
  count: number;
  description: string;
  link: string;
  name: string;
  slug: string;
  taxonomy: string;
  parent: number;
  meta: string[];
}

// Función para obtener posts con paginación
export async function getPosts(page = 1, perPage = 10): Promise<WPPost[]> {
  try {
    const response = await fetch(
      `${NEXT_PUBLIC_WP_API_URL_CLIENT}/wp/v2/posts?page=${page}&per_page=${perPage}&_embed`,
      {
        next: { revalidate: 60 }, // Revalidar cada minuto
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch posts: ${response.status} ${response.statusText}`);
    }

    const posts: WPPost[] = await response.json();
    return posts;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

// Función para obtener un post específico por slug
export async function getPost(slug: string): Promise<WPPost | null> {
  try {
    const response = await fetch(
      `${NEXT_PUBLIC_WP_API_URL_CLIENT}/wp/v2/posts?slug=${slug}&_embed`,
      {
        next: { revalidate: 60 }, // Revalidar cada minuto
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch post: ${response.status} ${response.statusText}`);
    }

    const posts: WPPost[] = await response.json();
    return posts.length > 0 ? posts[0] : null;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

// Función para obtener categorías
export async function getCategories(): Promise<WPCategory[]> {
  try {
    const response = await fetch(
      `${NEXT_PUBLIC_WP_API_URL_CLIENT}/wp/v2/categories?per_page=100`,
      {
        next: { revalidate: 3600 }, // Revalidar cada hora
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch categories: ${response.status} ${response.statusText}`);
    }

    const categories: WPCategory[] = await response.json();
    return categories;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

// Función para obtener posts por categoría
export async function getPostsByCategory(categoryId: number, page = 1, perPage = 10): Promise<WPPost[]> {
  try {
    const response = await fetch(
      `${NEXT_PUBLIC_WP_API_URL_CLIENT}/wp/v2/posts?categories=${categoryId}&page=${page}&per_page=${perPage}&_embed`,
      {
        next: { revalidate: 60 }, // Revalidar cada minuto
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch posts by category: ${response.status} ${response.statusText}`);
    }

    const posts: WPPost[] = await response.json();
    return posts;
  } catch (error) {
    console.error('Error fetching posts by category:', error);
    return [];
  }
}

// Función para obtener información del sitio
export async function getSiteInfo() {
  try {
    const response = await fetch(
      `${NEXT_PUBLIC_WP_API_URL_CLIENT}/`,
      {
        next: { revalidate: 3600 }, // Revalidar cada hora
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch site info: ${response.status} ${response.statusText}`);
    }

    const siteInfo = await response.json();
    return siteInfo;
  } catch (error) {
    console.error('Error fetching site info:', error);
    return null;
  }
}