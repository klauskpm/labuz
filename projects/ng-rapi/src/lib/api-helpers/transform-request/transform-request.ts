import { normalizeOptions } from '../normalize-options/normalize-options';
import { reduceRequest } from '../reduce-request/reduce-request';

export function transformRequest(transformers) {
  const reduceRequestTransformers = reduceRequest(transformers);
  return (request: { body?: any, options?: any}) => {
    const normalizedRequest = {
      body: request.body,
      options: normalizeOptions(request.options),
    };
    return reduceRequestTransformers(normalizedRequest);
  };
}
