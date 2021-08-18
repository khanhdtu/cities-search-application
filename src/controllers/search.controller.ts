import {repository} from '@loopback/repository';
import {get, param} from '@loopback/rest';
import cj from 'circular-json';
import {CacheRepository} from '../repositories';
import request from '../request';

export class SearchController {
  constructor(
    @repository(CacheRepository)
    public cacheRepository: CacheRepository,
  ) {}

  @get('/cities')
  async getCities(
    @param.query.string('input') input: string,
    @param.query.string('lat') lat: string,
    @param.query.string('lng') lng: string,
  ) {
    try {
      const found = await this.cacheRepository.findOne({
        where: {
          key: input,
        },
      });
      if (!found) {
        const res = await request({
          method: 'GET',
          params: {
            input,
            location: `${lat},${lng}`,
            radius: 10000,
          },
        });
        const {data} = cj.parse(cj.stringify(res));
        await this.cacheRepository.create({
          key: input,
          value: cj.stringify(data),
        });
        return data;
      } else {
        return cj.parse(found.value);
      }
    } catch (error) {
      return error;
    }
  }
}
