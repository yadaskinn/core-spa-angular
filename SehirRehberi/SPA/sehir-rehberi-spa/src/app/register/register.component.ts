import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormBuilder,FormGroup,Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  constructor(private autService:AuthService,
    private formBuilder:FormBuilder,
    ) { }

registerForm:FormGroup;
registerUser:any={};


  ngOnInit() {
    this.createRegisterForm();
  }


  createRegisterForm()
  {
    this.registerForm=this.formBuilder.group(
      {
        userName:["",Validators.required],
        password:["",[Validators.required,Validators.minLength(4),Validators.maxLength(8)]],
        confirmPassword:["",Validators.required]
      },
      {validator:this.passwordMachValidator}//özel validator
    )
  }

  passwordMachValidator(g:FormGroup)
  {
    return g.get('password').value===g.get("confirmPassword").value?null:{misMatch:true}
  }


register()
{
  if(this.registerForm.valid)
  {
    debugger;
    this.registerUser=Object.assign({},this.registerForm.value)
    this.autService.register(this.registerUser);
  }
}

}
