import { THEME } from './theme';

export const STRINGS = {
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
  VISITED: {
    title: 'LISTE DES VISITES',
    salePerson: 'Nom du commercial',
    customerDetails: 'Coordonnées client',
    company: 'Entreprise / Comité d’entreprise / Association',
    nameSurname: 'Nom et prénom du responsable',
    postcode: 'Code postal',
    address: 'Adresse',
    phone: 'Téléphone',
    city: 'Ville',
    email: 'E-mail',
    note: 'Note',
    register: 'ENREGISTRER',
    apply: 'EN SAVOIR PLUS',
    success: 'Votre demande a bien été transmise',
  },
};

export const ROUTES = {
  MAIN: 'Main',
  ON_BOARDING: 'OnBoarding',
  DETAILS: 'Details',
  ORDER: 'Order',
  VISITES: 'Visites',
};

export const searchTypes = [
  {
    id: 'town',
    color: THEME.COLORS.barney,
    value: 'Villes',
  },
  {
    id: 'visit',
    color: THEME.COLORS.sapphire,
    value: 'Visites',
  },
  {
    id: 'hotel',
    color: THEME.COLORS.tangerine,
    value: 'Hôtels',
  },
  {
    id: 'restaurant',
    color: THEME.COLORS.green,
    value: 'Restaurants',
  },
];
