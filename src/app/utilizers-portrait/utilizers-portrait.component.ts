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
  userName : string;
  profile: any;
  

  constructor(private http:HttpClient) { 

  }

  ngOnInit() {
    interface ApiKey{
      avatar_url: string;
      name: string;
      login: string;
      followers: number;
      following: number;
      public_repos: number;
      created_at: Date
      
    }
    
    this.http.get<ApiKey>("https://api.github.com/users/omoyi?access_token=8b578fc35c124b9560a47189aea912a380b7ecb6").subscribe(data=>{
      // Succesful API request
      this.profile = new Portrait(data.avatar_url,data.name, data.login, data.followers, data.following, data.public_repos, data.created_at);
    })

  }

}
