import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }
  onClick(num:number){
    switch(num){
      case 1:
        this.router.navigate(['/']);
        break;
      case 2:
          this.router.navigate(['/users']);
          break;
      default:
        this.router.navigate(['/']);
        
    }
  }

}
