import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private router:Router, private route:ActivatedRoute){}
  email:any;
  password:any;

  // email: string = '';
  // password: string = '';
 

  login(){
    if (this.email === "pratiksha" && this.password === "12345")
    {
      alert("Successfully Login")
      this.router.navigate(['/registration']);
    }
    else if (this.email === "aaa" && this.password === "123")
    {
      alert("Please Enter Valid Information");
    }
    else (this.email === "" && this.password === "")
    {
      alert("Please Enter The Input")
    }
  }

  // login(){
  //   this.router.navigateByUrl("/registration")
  // }
 
}
