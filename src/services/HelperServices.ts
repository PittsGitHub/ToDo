export const countCharactersWithoutSpaces = (stringToCount: string): number => {
  return stringToCount.replace(/\s+/g, "").length;
};
