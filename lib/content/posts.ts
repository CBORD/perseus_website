export interface Post {
  slug: string;
  title: string;
  excerpt: string;
}

export async function getPosts(): Promise<Post[]> {
  return [];
}
