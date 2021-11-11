export interface Alternate {
  type: string;
  href: string;
}

export interface Origin {
  title: string;
  streamId: string;
  htmlUrl: string;
}

export interface Summary {
  content: string;
  direction: string;
}

export interface Alternate2 {
  href: string;
  type: string;
}

export interface Visual {
  contentType: string;
  url: string;
  processor: string;
  width: number;
  height: number;
}

export interface Meme {
  id: string;
  label: string;
  score: number;
  featured: boolean;
}

export interface NewsItem {
  language: string;
  id: string;
  fingerprint: string;
  keywords: string[];
  originId: string;
  origin: Origin;
  title: string;
  author: string;
  crawled: number;
  published: number;
  summary: Summary;
  alternate: Alternate2[];
  visual: Visual;
  canonicalUrl: string;
  unread: boolean;
  memes: Meme[];
  recrawled?: number;
  updateCount?: number;
  engagement?: number;
}

export interface GetNewsResponse {
  id: string;
  title: string;
  updated: number;
  direction: string;
  alternate: Alternate[];
  items: NewsItem[] | undefined;
}
