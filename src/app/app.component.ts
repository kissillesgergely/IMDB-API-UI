import { Component } from '@angular/core';
import { IResult, ResultMap } from 'src/types/result';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'imdb-api-ui';
  resultsInYearGroups = new Map<string, IResult[]>();

  handleResultReady(data: ResultMap) {
    this.resultsInYearGroups = data;
  }
}
