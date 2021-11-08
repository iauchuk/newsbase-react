export const isPresent = (obj: any): boolean => {
  return obj !== undefined && obj !== null && obj !== "undefined";
};

export const checkArray = (obj: any): any[] => {
  return Array.isArray(obj) ? obj : [];
};
