import { Component, OnInit } from '@angular/core';
import { Log } from '@angular/core/testing/src/logger';

import { Observable, range } from 'rxjs';
import { filter, map, reduce } from 'rxjs/operators';
import { ValueService } from './value.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private value: ValueService) {}
 
  add(t) {
    this.value.getvalue(t);
  }
  ngOnInit() {
   
  }
  
}
