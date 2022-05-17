import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
declare var NgForm:any

@Component({
  selector: 'app-formreactive',
  templateUrl: './formreactive.component.html',
  styleUrls: ['./formreactive.component.scss']
})
export class FormreactiveComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private fb:FormBuilder) { }
  ngOnInit(): void {
    this.loginForm=this.fb.group({
      email:['', [
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
      ]],
      password:['', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20)
      ]],
  
    });
  }
  get loginFormController(){
    console.log(this.loginForm.controls)
    return this.loginForm.controls 
  }
  onSubmit(){
    alert(JSON.stringify(this.loginForm.value));
  }

}
