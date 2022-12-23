import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ValueService } from '../value.service';

@Component({
  selector: 'app-values',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.css'],
})
export class ValuesComponent implements OnInit {
  data: any = [];
  obs$ = new Observable((numb) => {
    numb.next(199), numb.next('obsesrvable'), numb.next('rxjs');
  });
  constructor(private value: ValueService) {}
  ngOnInit() {
    // example of subject
    this.value.data.subscribe((resp) => {
      this.data.push(resp);
      console.log(this.data, 'response');
    });

    /// example of observable
    this.obs$.subscribe(
      (data) => console.log(data, 'data'),
      (error) => console.log(error, 'error'),
      () => console.log('complete')
    );
  }
}
