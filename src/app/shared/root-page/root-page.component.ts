import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';
import {PageHeaderComponent} from '../page-header/page-header.component';

@Component({
    selector: 'app-root-page',
    templateUrl: './root-page.component.html',
    styleUrls: ['./root-page.component.css']
})
export class RootPageComponent implements OnInit {

    
    constructor(private sharedservice: SharedService, private router: Router) {
        
    }
    ngOnInit() {

    }
    
}
