import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'Product-Details',
  templateUrl: './Product-Details.component.html',
  styleUrls: ['./Product-Details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  elements: Array<any> = [{name:'Flash light'},{name:'Wooden stick'},{name:'Gas'},{name:'Tent'},{name:'Travel bag'},{name:'Food streak'}];
  constructor(private sharedservice: SharedService) { }

  ngOnInit(): void {
  }
}
