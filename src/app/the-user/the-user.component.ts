import { Component, OnInit } from '@angular/core';
import { PortraitService } from '../portrait.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-the-user',
  templateUrl: './the-user.component.html',
  styleUrls: ['./the-user.component.css'],
  providers: [PortraitService]
})
export class TheUserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
