import { AppRoute } from './consts';

const convertToPercentage = (num: number) => Math.round(num) * 20;

const capitalizeFirstLetter = (word: string) => word.charAt(0).toUpperCase() + word.slice(1);

const convertDataToText = (date: string) => {
  const dateObject = new Date(date);
  const formattedDate = dateObject.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });

  return formattedDate;
};

const isMainPage = (pagePathname: string) => pagePathname === AppRoute.Main.toString();
const isOfferPage = (pagePathname: string) => pagePathname.includes('/offer/');
const isFavoritesPage = (pagePathname: string) => pagePathname === AppRoute.Favorites.toString();

export {
  convertToPercentage,
  capitalizeFirstLetter,
  convertDataToText,
  isMainPage,
  isOfferPage,
  isFavoritesPage,
};
