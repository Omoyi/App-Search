import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map'
import {Portrait} from 'src/app/portrait-class/portrait'



@Injectable({
  providedIn: 'root'
})
export class PortraitService {
   portrait :Portrait



  constructor(private http: HttpClient) { 
   
  }
}
