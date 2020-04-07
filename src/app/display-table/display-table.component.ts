import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-table',
  templateUrl: './display-table.component.html',
  styleUrls: ['./display-table.component.scss']
})
export class DisplayTableComponent implements OnInit {

  constructor() { }
  page: number = 1;

  ngOnInit(): void {
    console.log(this.searchData)
  }

  @Input() searchData: [any]
   // this gets added to the table component by the use of a directive
   // directives are used to manipulate the DOM structure, it can be used to add a DOM
  // element or remove an existing DOM element. Directive are usually prefixed with *
  // String interpolation make every value added in it to be evaluated at runtime
  // and whatever the finally value is will be rendered to the DOM.
  tableHeaders = ['Tweet', 'Likes', 'Replies', 'Retweets', 'Hashtags', 'Date']

}
