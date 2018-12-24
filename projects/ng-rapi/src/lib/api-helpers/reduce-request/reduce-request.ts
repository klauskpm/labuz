export function reduceRequest(transformers = []) {
  return (requestData) => {
    return transformers.reduce((transformedRequest, transformer) => {
      transformedRequest = transformer(transformedRequest);
      return transformedRequest;
    }, requestData);
  };
}
