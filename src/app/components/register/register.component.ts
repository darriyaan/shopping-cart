import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

  function symbolValidator(control:any){   //control = registerFrom.get('password')
    if(control.hasError('required')) return null;
    if(control.hasError('minlength')) return null;
    return control.value.indexOf('@') > -1 ? null : {symbol: true};
  }  //if data is valid return null else return an object
  
  function passwordsMatchValidator(form:any){
    console.log(form);
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');
    return password.value !== confirmPassword.value ? confirmPassword.setErrors({passwordsMatch: true}) : confirmPassword.setErrors(null);
  }
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  constructor(private builder: FormBuilder) { }

  ngOnInit(){
    this.registerForm = this.builder.group({
      name: ['', Validators.required], email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required], 
      password: ['', [Validators.required, symbolValidator, Validators.minLength(4)]], 
      confirmPassword: ['', Validators.required]
    },{ validator: passwordsMatchValidator} );
  }

  register(){
    console.log(this.registerForm.value);
  }
}
