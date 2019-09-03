import { Component, OnInit } from '@angular/core';
import { Portrait } from '../portrait-class/portrait';
import { HttpClient } from '@angular/common/http';
import { PortraitService } from '../portrait.service';
import { Repository } from '../repository';


@Component({
  selector: 'app-utilizers-portrait',
  templateUrl: './utilizers-portrait.component.html',
  styleUrls: ['./utilizers-portrait.component.css'],
  providers: [PortraitService]
})
export class UtilizersPortraitComponent implements OnInit {
  
  portrait: Portrait;
  repo: Repository;
  userRepo: any;
  userName : string;
  

  constructor(private http:HttpClient, private portraitService: PortraitService) { 

  }

  getGithubUser() {
    this.portraitService.updateProfile(this.userName);

    this.portraitService.getUserinfo();
    this.portrait = this.portraitService.portrait;
   console.log(this.portrait);
 
    this.portraitService.getRepoInfo(this.userName);
    this.userRepo = this.portraitService.newRepos;
  }
 
  ngOnInit() {
    this.portraitService.getRepoInfo(this.userName);
    this.repo = this.portraitService.repo;
    this.portraitService.getUserinfo();
    this.portrait = this.portraitService.portrait;

    }

}
