import { Component, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  faCoffee = faStar;
  constructor() {}

  ngOnInit(): void {}
}
