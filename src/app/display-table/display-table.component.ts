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

  tableHeaders = ['Tweet', 'Likes', 'Replies', 'Retweets', 'Hashtags', 'Date']
}
