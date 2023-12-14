export const fillErrorsObject = (object, key, message) => {
  if (message.toLowerCase().replaceAll(' ', '').includes(key.toLowerCase())) {
    object[key] = message;
  }
};

export const getErrorMessage = (errorObject) => {
  return errorObject.response.data.message || errorObject.message;
};
