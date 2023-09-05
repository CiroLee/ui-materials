type ObjType = Record<string | number | symbol, any>;
export const omit = <T>(obj: ObjType, arr: string[]): T => {
  if (!Array.isArray(arr)) return obj;
  return Object.keys(obj)
    .filter((key) => !arr.includes(key))
    .reduce((acc: ObjType, key: string) => ((acc[key] = obj[key]), acc), {});
};
