const convertToPercentage = (num: number) => Math.round(num) * 20;

const capitalizeFirstLetter = (word: string) => word.charAt(0).toUpperCase() + word.slice(1);

const convertDataToText = (date: string) => {
  const dateObject = new Date(date);
  const formattedDate = dateObject.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });

  return formattedDate;
};

export {
  convertToPercentage,
  capitalizeFirstLetter,
  convertDataToText,
};
