import { Component, Input, OnInit } from '@angular/core';
import { IResult, ResultMap } from 'src/types/result';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css']
})
export class ResultListComponent implements OnInit {
  @Input() groupedResults: ResultMap = new Map<string, IResult[]>();

  constructor() { }

  ngOnInit(): void {
  }

}
