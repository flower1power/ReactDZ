import { TCards } from './cards.type';

export const cards: TCards = [
  {
    id: 1,
    imgPath: '/public/BlackWindow.svg',
    name: 'Black Widow',
    rang: 324,
  },
  {
    id: 2,
    imgPath: '/public/BlackWindow.svg',
    name: 'Black Widow',
    rang: 324,
  },
  {
    id: 3,
    imgPath: '/public/BlackWindow.svg',
    name: 'Black Widow',
    rang: 324,
  },
  {
    id: 4,
    imgPath: '/public/BlackWindow.svg',
    name: 'Black Widow',
    rang: 324,
  },
  {
    id: 5,
    imgPath: '/public/BlackWindow.svg',
    name: 'Black Widow',
    rang: 324,
  },
  {
    id: 6,
    imgPath: '/public/BlackWindow.svg',
    name: 'Black Widow',
    rang: 324,
  },
];

export interface ISearchDescription {
  '#TITLE': string;
  '#YEAR'?: number;
  '#IMDB_ID': string;
  '#RANK': number;
  '#ACTORS': string;
  '#AKA': string;
  '#IMDB_URL': string;
  '#IMDB_IV': string;
  '#IMG_POSTER'?: string;
  photo_width?: number;
  photo_height?: number;
}
export const favorites: ISearchDescription[] = [
  {
    '#IMDB_ID': '1',
    '#TITLE': 'Black Widow',
    '#RANK': 324,
    '#IMG_POSTER': '/public/BlackWindow.svg',
    '#ACTORS': '',
    '#AKA': '',
    '#IMDB_URL': '',
    '#IMDB_IV': '',
  },
  {
    '#IMDB_ID': '1',
    '#TITLE': 'Black Widow',
    '#RANK': 324,
    '#IMG_POSTER': '/public/BlackWindow.svg',
    '#ACTORS': '',
    '#AKA': '',
    '#IMDB_URL': '',
    '#IMDB_IV': '',
  },
];

export const description = {
  type: {
    title: 'Тип',
    description: 'Movie',
  },
  date: {
    title: 'Дата выхода',
    description: '2019-04-24',
  },
  duration: {
    title: 'Длительность',
    description: '181 мин',
  },
  genre: {
    title: 'Жанр',
    description: 'Adventure, Science Fiction, Action',
  },
  reviews: {
    title: 'Not as good as infinity war..',
    date: '2019-04-29',
    description:
      'But its a pretty good film. A bit of a mess in some parts, lacking the cohesive and effortless feel infinity war somehow managed to accomplish. Some silly plot holes and characters that could&apos;vebeen cut (Ahem, captain marvel and thanos). The use of Captain marvel in this film was just ridiculous. Shes there at the start, bails for some reason? And then pops up at the end to serve no purpose but deux ex machina a space ship...',
  },
};
