import { Component, OnInit } from '@angular/core';
import { Portrait } from '../portrait-class/portrait';
import { HttpClient } from '@angular/common/http';
import { PortraitService } from '../portrait.service';


@Component({
  selector: 'app-utilizers-portrait',
  templateUrl: './utilizers-portrait.component.html',
  styleUrls: ['./utilizers-portrait.component.css']
})
export class UtilizersPortraitComponent implements OnInit {
  
  portrait: Portrait;
  userName : string = "";
  profile: any;
  

  constructor(private http:HttpClient, private portraitService: PortraitService) { 

  }

  ngOnInit() {
    this.portraitService.getRepoInfo(this.userName);
    this.repos = this.profileService.repo;
    this.profileService.getUserInfo();
    this.user = this.profileService.user;

    }
 
  getGithubUser(){
    this.http.get('https://api.github.com/users/' + this.userName)
    .subscribe((response) => {
      this.profile = response;
      console.log(this.profile); 
    })
  }

}
