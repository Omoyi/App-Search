import { Component, OnInit } from '@angular/core';
import { Portrait } from '../portrait-class/portrait';
import { HttpClient } from '@angular/common/http';
import { PortraitService } from '../portrait.service';
import { Repository } from '../repository';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-the-user',
  templateUrl: './the-user.component.html',
  styleUrls: ['./the-user.component.css'],
  providers: [PortraitService]
})
export class TheUserComponent implements OnInit {
  
  portrait: Portrait;
  repo: Repository;
  userRepo: any;
  userName : string;
  

  constructor(private http:HttpClient, public portraitService: PortraitService) { 

  }

  getGithubUser() {
    this.portraitService.updateProfile(this.userName);

    this.portraitService.getUserinfo();
    this.portrait = this.portraitService.portrait; 
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
