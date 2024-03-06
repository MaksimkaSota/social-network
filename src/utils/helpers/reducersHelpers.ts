type ObjectType = { [field: string]: any };

export const updateObjectInArray = (items: Array<any>, itemId: number, objectProps: ObjectType): Array<any> => {
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
