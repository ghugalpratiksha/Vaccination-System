import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  heading = "Welcome To Our Page"
  imgUrl = "/assets/logo.jpeg";

  constructor(private router: Router, private route: ActivatedRoute){}

  
//   btnClick= function () {
//     this.router.navigateByUrl('/login');
// };

btnClick(){
  this.router.navigateByUrl("/login")
}
}
