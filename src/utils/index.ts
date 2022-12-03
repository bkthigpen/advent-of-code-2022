export const commonCharacters = (array: string[]): string[] => {
  let result = [...array[0]];
  for (let i = 1; i < array.length; i++) {
    result = [...new Set(result)].filter((res) => {
      const l = array[i].length;
      array[i] = array[i].replace(res, "");
      return l > array[i].length;
    });
  }

  return result;
};
