import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  name: any;
  email: any;
  number: any;
  address: any;
  candidate1: any =[];
  candidate2: any =[];
  candidate3: any =[];

  submit(){
    let obj={
      name: this.name,
    }
    this.candidate1.push(obj);
    this.clear();
  }

  clear(){
    this.name= '';
    this.email= '',
    this.number= '',
    this.address= ''
  }

  dose(i: any){
    this.candidate2.push(this.candidate1[i]);
    this.candidate1.splice(i, 1)
  }

  dose2(i: any){
    this.candidate3.push(this.candidate2[i]);
    this.candidate2.splice(i, 1)
  }

  delete(i: any){
    this.candidate1.splice(i, 1)
  }

  delete2(i: any){
    this.candidate1.push(this.candidate2[i]);
    this.candidate2.splice(i,1)
  }

  delete3(i: any){
    this.candidate2.push(this.candidate3[i]);
    this.candidate3.splice(i,1)
  }

}
