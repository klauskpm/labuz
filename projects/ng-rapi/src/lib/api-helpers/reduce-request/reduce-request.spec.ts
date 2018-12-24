import {reduceRequest} from './reduce-request';

describe('api-helpers:reduceRequest', () => {
  it('should be defined', () => {
    expect(reduceRequest).toBeDefined();
  });

  it('should should return a function', () => {
    expect(reduceRequest()).toEqual(jasmine.any(Function));
  });

  it('should transform the request data', () => {
    const requestData = {};
    const addProp = (data: any) => {
      data.prop = 'value';
      return data;
    };
    const dataTransformer = reduceRequest([addProp]);
    const transformedData = dataTransformer(requestData);
    expect(transformedData.prop).toEqual('value');
  });
});
