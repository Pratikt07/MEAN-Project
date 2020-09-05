import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RouterModule, Router } from '@angular/router';
import { faAirFreshener } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-client-login',
  templateUrl: './client-login.component.html',
  styleUrls: ['./client-login.component.css'],
})
export class ClientLoginComponent implements OnInit {
  public faAirFreshener = faAirFreshener;
  public uiInvalidCredential = false;

  public cloginForm = new FormGroup({
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
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {}
  async loginProcessHere() {
    console.log('hi');
    const data = this.cloginForm.value;
    console.log(data);

    // ajax call
    const url = 'http://localhost:5000/authr-user';
    const result: any = await this.http.post(url, data).toPromise();

    if (result === true) {
      sessionStorage.setItem('sid', 'true');
      this.router.navigate(['home']);
    } else {
      window.alert('Invalid Credentials');
      this.uiInvalidCredential = true;
    }
  }
}
