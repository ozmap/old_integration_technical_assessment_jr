import { type UserModel } from '../../domain/models';
import { type HttpClient } from '../interfaces';
import { type HttpMethod, type HttpResponse, HttpStatusCode, type HttpRequest } from '../types';

export class HttpClientSpy<R = any> implements HttpClient<R> {
  public method?: HttpMethod;
  public url?: string;
  public body?: any;
  public headers?: any;
  public data?: any;
  public response?: HttpResponse = {
    statusCode: HttpStatusCode.ok,
    body: mockRandomUserApiResponse()
  };

  async request (request: HttpRequest): Promise<HttpResponse> {
    this.method = request.method;
    this.url = request.url;
    this.headers = request.headers;
    this.data = request.data;
    return this.response;
  }
}

export const mockHttpRequest = (): HttpRequest => ({
  method: 'post',
  url: 'any_url',
  body: { field: 'any_body_value' },
  headers: { field: 'any_header_value' },
  data: { field: 'any_data_value' }
});

export const mockRandomUserApiResponse = (): any => ({
  results: [
    {
      gender: 'female',
      name: {
        title: 'Ms',
        first: 'Priscilla',
        last: 'Wood'
      },
      location: {
        street: {
          number: 9048,
          name: 'Oak Lawn Ave'
        },
        city: 'Warrnambool',
        state: 'Victoria',
        country: 'Australia',
        postcode: 8129,
        coordinates: {
          latitude: '-81.6933',
          longitude: '88.7028'
        },
        timezone: {
          offset: '-7:00',
          description: 'Mountain Time (US & Canada)'
        }
      },
      email: 'priscilla.wood@example.com',
      login: {
        uuid: 'cfb2e9fc-124a-42bd-b18d-1b4f2ed84b02',
        username: 'tinybutterfly765',
        password: 'lalala',
        salt: 'lqOkSZDe',
        md5: 'ab9fcb6cbf28d6d047e31c102f0813da',
        sha1: '9bc23d90cfa0716bb2b3384028bea49f2844fa34',
        sha256: '3cf6b633083bba7aaa3e7865141941ba8f7bef8af5820274be61c155364e5b06'
      },
      dob: {
        date: '1959-04-19T12:08:34.297Z',
        age: 64
      },
      registered: {
        date: '2022-01-21T07:00:30.994Z',
        age: 1
      },
      phone: '09-8537-0164',
      cell: '0493-269-030',
      id: {
        name: 'TFN',
        value: '172652216'
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/women/14.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/14.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/14.jpg'
      },
      nat: 'AU'
    }
  ],
  info: {
    seed: '95e55d592244072b',
    results: 1,
    page: 1,
    version: '1.4'
  }
});

export const mockUserModel = (): UserModel => ({
  address: 'Oak Lawn Ave 9048 8129 Warrnambool Victoria Australia',
  code: 'priscilla.wood',
  name: 'Priscilla Wood',
  observation: 'priscilla.wood@example.com'
});