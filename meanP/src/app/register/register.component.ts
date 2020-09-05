import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  public cregisterForm = new FormGroup({
    firstname: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10),
      Validators.pattern('[a-zA-Z]*'),
    ]),
    lastname: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10),
      Validators.pattern('[a-zA-Z]*'),
    ]),
    emailid: new FormControl('', [
      Validators.required,

      Validators.pattern(
        '([a-zA-Z]+[a-zA-Z0-9]*@[a-zA-Z]+(.)(com|in))|([a-zA-Z]+[a-zA-Z0-9]*)'
      ),
    ]),
    psw: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(12),
      Validators.pattern('[a-zA-Z0-9@]{5,12}'),
    ]),
  });
  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {}

  async registerHere() {
    const data = this.cregisterForm.value;
    let url = 'http://localhost:5000/adduser';
    let result: any = await this.http.post(url, data).toPromise();
    console.log(result);
    //this.cregisterForm.reset;
    this.router.navigate(['login']);
    this.cregisterForm.value;
  }
}
