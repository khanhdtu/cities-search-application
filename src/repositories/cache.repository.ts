import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Cache, CacheRelations} from '../models';

export class CacheRepository extends DefaultCrudRepository<
  Cache,
  typeof Cache.prototype.id,
  CacheRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(Cache, dataSource);
  }
}
