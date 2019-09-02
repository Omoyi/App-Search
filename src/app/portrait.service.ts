import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Portrait} from 'src/app/portrait-class/portrait'



@Injectable({
  providedIn: 'root'
})
export class PortraitService {
   userName : string;
   portrait: Portrait;
   profile: any;
  //  repo: Repository;

   getUserinfo() {
    interface ApiResponse {

      login: string;
      avatar_url: string;
      followers: string;
      following: string;
      public_repos: string;user
      name: string;
      location: string;
      email: string;
      created_at: Date;
      html_url: string;

    }


  constructor(private http: HttpClient) { 
    this.portrait = new Users ('', '', '', '', '','','','','',new Date);
    this.repo = new Repository('', '', '');
    this.userName = 'Omoyi';
  }
}