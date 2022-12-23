import { OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class ValueService implements OnInit {
  constructor() {}

  data = new Subject();
 
  getvalue(valu: string) {
    return this.data.next(valu);
  }

  ngOnInit() {}
   
}
