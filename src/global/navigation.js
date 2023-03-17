import cardTypeEnum from './enums/cardTypeEnum';

const navigation = [
  {
    path: '/projets',
    title: 'Les projets',
  },
  {
    path: '/associations',
    title: 'Les associations',
  },
  {
    path: '/developpeurs',
    title: 'Les développeurs',
  },
  {
    path: '/creer-un-projet',
    title: 'Créer un projet',
    for: cardTypeEnum.association,
  },
];

export default navigation;
