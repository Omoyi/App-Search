import { Component, OnInit } from '@angular/core';
import { Portrait } from '../portrait-class/portrait';
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-utilizers-portrait',
  templateUrl: './utilizers-portrait.component.html',
  styleUrls: ['./utilizers-portrait.component.css']
})
export class UtilizersPortraitComponent implements OnInit {
  
  profile: Portrait;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    interface ApiResult{
      avatar_url: string;
      name: string;
      login: string;
      public_repos: number;
      created_at: Date
      
    }
    
    this.http.get<ApiResult>("http://quotes.stormconsultancy.co.uk/random.json").subscribe(data=>{
      // Succesful API request
      this.profile = new Portrait(data.avatar_url,data.name, data.login, data.public_repos, data.created_at)
    })

  }

}
