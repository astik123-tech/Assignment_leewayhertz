import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RegisterService } from '../service/register.service';

interface user {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  Image1: string;
}

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css'],
})
export class ShowUserComponent implements OnInit {
  url= environment.rooturl
  constructor(private registerService: RegisterService) {}
  userData:Array<user>
  ngOnInit(): void {
    this.registerService.getUser().subscribe(
      (data: {
        
        success: boolean;
        message: string;
        data: Array<user>;
      }) => {
        this.userData=data.data
        
        
      },
      () => {}
    );
  }
}
