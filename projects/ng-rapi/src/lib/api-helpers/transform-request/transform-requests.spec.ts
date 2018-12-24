import {transformRequest} from './transform-request';

describe('api-helpers:transformRequest', () => {
  it('should be defined', function () {
    expect(transformRequest).toBeDefined();
  });

  it('should return a function', function () {
    const requestTransformers = transformRequest(undefined);
    expect(requestTransformers).toEqual(jasmine.any(Function));
  });

  it('should return an normalized request data when called without transformers', function () {
    const requestTransformers = transformRequest(undefined);
    const transformedData = {body: undefined, options: jasmine.any(Object)};
    expect(requestTransformers({})).toEqual(transformedData);
  });
});
