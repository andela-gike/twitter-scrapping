import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'twitter-scrapping';
  tabHeaders = ['Hashtag search', 'User search']
  activeTab = this.tabHeaders[0];
}
