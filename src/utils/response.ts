/** 
  @param message message to send to client
  @param data data to send. default will be null
*/
const successfulResponse = (message: string, data = null) => {
  return {
    success: true,
    message,
    data,
  };
};
/** 
  @param message message to send to client
*/
const invalidResponse = (message: string, data = null) => {
  return {
    success: false,
    message,
    data,
  };
};

export { successfulResponse, invalidResponse };
