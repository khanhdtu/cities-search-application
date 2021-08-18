import {Entity, model, property} from '@loopback/repository';

@model()
export class Cache extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  id: string;
  @property({
    type: 'string',
    required: true,
  })
  key: string;

  @property({
    type: 'string',
    required: true,
  })
  value: string;

  @property({
    type: 'object',
    default: {},
  })
  options?: object;

  constructor(data?: Partial<Cache>) {
    super(data);
  }
}

export interface CacheRelations {
  // describe navigational properties here
}

export type CacheWithRelations = Cache & CacheRelations;
