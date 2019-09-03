import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Repository } from 'src/app/repository'
import {Portrait} from 'src/app/portrait-class/portrait'
import { environment }  from 'src/environments/environment'
import { map, catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PortraitService {
   userName : string;
   portrait: Portrait;
   repo: Repository;
   newRepos: any;
   newPortrait: any;

   private accessToken ='8b578fc35c124b9560a47189aea912a380b7ecb6';

  constructor(private http: HttpClient){
    this.portrait = new Portrait ('', '', '', '', '','','','','',new Date);
    this.repo = new Repository('', '', '');
    this.userName = 'Omoyi';
  }
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

    let promise = new Promise(((resolve, reject) => {
      this.http.get<ApiResponse>('https://api.github.com/users/' + this.userName +
      '?access_token=' + environment.apiKey)

      .toPromise().then(response => {
        this.portrait.login = response.login;
        this.portrait.avatar_url = response.avatar_url;
        this.portrait.followers_url = response.followers;
        this.portrait.following_url = response.following;
        this.portrait.repos_url = response.public_repos;
        this.portrait.name = response.name;
        this.portrait.location = response.location;
        this.portrait.email = response.email;
        this.portrait.createdAt = response.created_at;
        this.portrait.repo_url = response.html_url;
        console.log(this.portrait);

      },
      error => {
        reject(error);
      });
    } ));
    return promise;
      }

      getRepoInfo(userName) {

        interface ApiResponse {
    
          name: string;
          repo_url: string;
          description: string;
    
        }
        let promise = new Promise(( (resolve, reject) => {
          this.http.get<ApiResponse>('https://api.github.com/users/' + this.userName + '/repos?access_token=' + environment.apiKey)
          .toPromise()
          .then(response_repo => {
            this.newRepos = response_repo;
            // console.log(this.newRepos);
           
            resolve();
      },
      
      error => {
        reject(error);
      
      }
    );
    }));
    return promise;
      }
      updateProfile(userName: string) {
        this.userName = userName;
      }
}