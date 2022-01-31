import { Component } from '@angular/core';
import { IResult, ResultMap } from 'src/types/result';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'imdb-api-ui';
  resultsInYearGroups: ResultMap = new Map<string, IResult[]>();

  handleResultReady(data: ResultMap) {
    this.resultsInYearGroups = data;
  }
}
