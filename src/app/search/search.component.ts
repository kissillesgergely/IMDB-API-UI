import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { IResult, ResultErrors, ResultMap } from 'src/types/result';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() resultReady = new EventEmitter<ResultMap>();
  // With a minimal check if the input is adequate
  titleToSearchFor = new FormControl('', [Validators.minLength(2)]);
  results: IResult[] = [];
  error: boolean = false;
  errorMessage: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  async fetchData(event: Event) {
    event.preventDefault();
    this.error = false;

    // Maybe there could be more checks for other characters
    let titleForAPICall = this.titleToSearchFor.value.replaceAll(' ', '+');

    // If one wants more than 10 results there's a parameter to ask for second page
    // Although this is not implemented here
    try {
      const r = await fetch(
        `https://www.omdbapi.com/?apikey=8ea39b15&s=${titleForAPICall}&type=movie`
      );
      this.results = (await r.json()).Search;
    } catch {
      this.errorMessage = ResultErrors.fetchError;
      this.error = true;
      this.resultReady.emit(new Map<string, IResult[]>());
      return;
    }

    if(!this.results) {
      this.errorMessage = ResultErrors.noResults;
      this.error = true;
      // Make the rest of the app know the new result list is empty
      this.resultReady.emit(new Map<string, IResult[]>());
      return;
    }
    
    if (typeof Worker !== 'undefined') {
      const worker = new Worker(new URL('./search.worker', import.meta.url));
      worker.onmessage = ({ data }) => {
        this.resultReady.emit(data);
      };
      worker.postMessage(this.results);
    } else {
      // Web Workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.

      // This is not implemented in frames of this coding challenge
    }
  }
}
