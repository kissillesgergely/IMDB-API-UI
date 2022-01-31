import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IResult, ResultMap } from 'src/types/result.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() resultReady = new EventEmitter<ResultMap>();
  titleToSearchFor = new FormControl('');
  results: IResult[] = [];
  resultsInYearGroups: ResultMap = new Map<string, IResult[]>();

  constructor() { }

  ngOnInit(): void {
  }

  async fetchData(event: Event) {
    event.preventDefault();

    // Have another function here, which replaces spaces or special characters
    let titleForAPICall = this.titleToSearchFor.value.replaceAll(' ', '+');

    //get more than 10 results?
    // put api key into an env file maybe? or reflect on it here or int he readme
    const r = await fetch(`https://www.omdbapi.com/?apikey=8ea39b15&s=${titleForAPICall}`);
    this.results = (await r.json()).Search;
    
    if (typeof Worker !== 'undefined') {
      // Create a new
      const worker = new Worker(new URL('./search.worker', import.meta.url));
      //const worker = new Worker('./search.worker', { type: 'module'});
      worker.onmessage = ({ data }) => {
        //console.log(`page got message: ${data}`);
        //this.resultReady.emit(data);
        console.log(data)
      };
      worker.postMessage('hello');
    } else {
      // Web Workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
    }

    this.resultsInYearGroups = this.groupResults(this.results);
    this.resultReady.emit(this.resultsInYearGroups);
  }

  groupResults(data: IResult[]) {
    const resultsInYearGroups = new Map<string, IResult[]>();
  
    for(const result of data) {
      if(!resultsInYearGroups.has(result.Year)) {
        resultsInYearGroups.set(result.Year, []);
      }
  
      resultsInYearGroups.get(result.Year)?.push(result);
    }
  
    console.log(resultsInYearGroups);

    return resultsInYearGroups;
  }
}

