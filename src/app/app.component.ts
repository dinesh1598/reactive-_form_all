import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { forbiddenNameValidator } from './shared/user-name.validators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor (private fb:FormBuilder){}

  registrationForm=this.fb.group({
    userName:['vino',[Validators.required,Validators.minLength(3),forbiddenNameValidator(/password/)]],
    password:[''],
    conformPassword:[''],
    address:this.fb.group({
      city:[''],
      state:[''],
      postalCode:[''],
    })
  });

//  registrationForm=new FormGroup(
//    {
//       userName:new FormControl('dinesh'),
//       password:new FormControl(''),
//       conformPassword:new FormControl(''),
//       address:new FormGroup({
//         city:new FormControl(''),
//         state:new FormControl(''),
//         postalCode:new FormControl('')
//       })
//    }
//  );
 loadApidata(){
  this.registrationForm.patchValue({
    userName:'sethu',
    password:'123',
    conformPassword:'123'

  });

}
}
