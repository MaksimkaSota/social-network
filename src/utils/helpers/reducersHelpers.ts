export const updateObjectInArray = (items, itemId, objectProps) => {
  return items.map((item) => {
    if (item.id === itemId) {
      return {
        ...item,
        ...objectProps,
      };
    }
    return item;
  });
};
