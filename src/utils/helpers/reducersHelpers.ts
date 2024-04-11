import { v1 } from 'uuid';

type ObjectType = { [field: string]: any };

export const updateObjectInArray = (items: Array<ObjectType>, itemId: number, objectProps: ObjectType): Array<any> => {
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

export const addUniqueIdInObject = (items: Array<ObjectType>): Array<any> => {
  return items.map((item: ObjectType): ObjectType => ({ ...item, id: v1() }));
};
