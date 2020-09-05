import { Component, OnInit } from '@angular/core';
import { faSquare } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.css'],
})
export class SeatsComponent implements OnInit {
  public faSquare = faSquare;
  constructor(private router: Router, private http: HttpClient) {}

  sbook() {}
  ngOnInit(): void {}
  async seatBook() {
    // const data = this.sbook.value;
    let url = 'http://localhost:5000/adduser';
    //let result: any = await this.http.post(url, data).toPromise();
    //console.log(result);
    //this.cregisterForm.reset;
    this.router.navigate(['login']);
    //this.sbook.value;
  }
}
