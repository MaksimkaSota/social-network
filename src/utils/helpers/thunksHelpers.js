export const fillErrorsObject = (object, key, message) => {
  if (message.toLowerCase().replaceAll(' ', '').includes(key.toLowerCase())) {
    object[key] = message;
  }
};
