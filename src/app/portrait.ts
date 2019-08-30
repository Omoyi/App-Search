import { Url } from 'url';

export class Portrait {
  constructor (avatar_url: Url, name: string, login: string, public_repos: number,
  created_at: Date, ){

  }
}
