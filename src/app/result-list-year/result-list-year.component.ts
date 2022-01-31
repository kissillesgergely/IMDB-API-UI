import { Component, Input, OnInit } from '@angular/core';
import { IResult } from 'src/types/result.interface';

@Component({
  selector: 'app-result-list-year',
  templateUrl: './result-list-year.component.html',
  styleUrls: ['./result-list-year.component.css']
})
export class ResultListYearComponent implements OnInit {
  @Input() year: string = '';
  @Input() results: IResult[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
