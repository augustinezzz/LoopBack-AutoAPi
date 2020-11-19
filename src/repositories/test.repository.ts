import {DefaultCrudRepository} from '@loopback/repository';
import {Test, TestRelations} from '../models';
import {MongoDsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class TestRepository extends DefaultCrudRepository<
  Test,
  typeof Test.prototype.id,
  TestRelations
> {
  constructor(
    @inject('datasources.mongoDS') dataSource: MongoDsDataSource,
  ) {
    super(Test, dataSource);
  }
}
