import { v1 } from 'uuid';

type ObjectType = { [field: string]: any };

export const updateObjectInArray = (items: ObjectType[], itemId: number, objectProps: ObjectType): any[] => {
  return items.map((item: ObjectType): ObjectType => {
    if (item.id === itemId) {
      return {
        ...item,
        ...objectProps,
      };
    }
    return item;
  });
};

export const addUniqueIdInObject = (items: ObjectType[]): any[] => {
  return items.map((item: ObjectType): ObjectType => ({ ...item, id: v1() }));
};
