export interface IDetails {
  short: IDetailsShort;
}

export interface IDetailsShort {
  '@type': string;
  url: string;
  name: string;
  image: string;
  description: string;
  review: IReview;
  genre: string[];
  datePublished: string;
  duration: string;
  aggregateRating: AggregateRating;
}

export interface AggregateRating {
  '@type': string;
  ratingCount: number;
  bestRating: number;
  worstRating: number;
  ratingValue: number;
}

export interface IReview {
  dateCreated: string;
  name: string;
  reviewBody: string;
}
