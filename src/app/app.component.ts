import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IResult, ResultMap } from 'src/types/result.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'imdb-api-ui';
  titleToSearchFor = new FormControl('');
  results: IResult[] = [];
  resultsInYearGroups = new Map<string, IResult[]>();

  handleResultReady(data: ResultMap) {
    this.resultsInYearGroups = data;
    console.log(this.resultsInYearGroups);
  }
}
