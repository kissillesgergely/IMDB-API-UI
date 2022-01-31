import { Component, Input, OnInit } from '@angular/core';
import { IResult, Result } from 'src/types/result';

@Component({
  selector: 'app-result-list-item',
  templateUrl: './result-list-item.component.html',
  styleUrls: ['./result-list-item.component.css']
})
export class ResultListItemComponent implements OnInit {
  @Input() result: IResult = new Result();

  constructor() { }

  ngOnInit(): void {
  }

  getLinkURL() {
    return `https://www.imdb.com/title/${this.result.imdbID}/`
  }

}
