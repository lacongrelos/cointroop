import { JsonController, Get } from 'routing-controllers';

@JsonController()
export class InfoController {
  @Get('/time')
  getTime() {
    return { time: new Date().toISOString()}
  }
  @Get('/ping')
  getPing() {
    return { 42: 'The answer to life, the universe, and everything'};
  }

  @Get('/server')
  getServer() {
    return { server: 'This action returns user #'};
  }
}