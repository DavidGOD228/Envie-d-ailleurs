import { THEME } from './theme';

export const TEXT_TEMPLATES = {
  ON_BOARDING: {
    title: `Envie d'Ailleurs?`,
    subTitle: `Cela tombe bien ! Nous sommes là pour ça !`,
    description: `Envie d’Ailleurs est l’agence qui vous prépare sur-mesure vos voyages en Autocars à travers l’Europe.`,
    button: 'GO !',
  },
  SIDE_BAR: {
    input: 'Tapez une ville',
    inputButton: 'OK',
    description:
      'Naviguez sur la carte et cliquez sur l’un des POI pour voir apparaître son détail',
  },
};

export const ROUTES = {
  MAIN: 'Main',
  ON_BOARDING: 'OnBoarding',
  DETAILS: 'Details',
  ORDER: 'Order',
};

export const searchTypes = [
  {
    id: 'cities',
    color: THEME.COLORS.barney,
    value: 'Villes',
  },
  {
    id: 'visits',
    color: THEME.COLORS.sapphire,
    value: 'Visites',
  },
  {
    id: 'hotels',
    color: THEME.COLORS.tangerine,
    value: 'Hôtels',
  },
  {
    id: 'restaurants',
    color: THEME.COLORS.green,
    value: 'Restaurants',
  },
];
