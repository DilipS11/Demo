import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';


@Injectable({
    providedIn: 'root'
})
export class SharedService {

    constructor(private Activateroute: ActivatedRoute, private httpclient: HttpClient) {   
    }
    screen1api(){
      return this.httpclient.get('http://127.0.0.1:5000/api/logs?page=1&per_page=10&start_date_time=&end_date_time=');
    }
}
