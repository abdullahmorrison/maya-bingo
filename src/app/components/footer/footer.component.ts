import { GoogleAnalyticsService } from './../../services/google-analytics.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  googleAnalyticsService: GoogleAnalyticsService

  constructor() { 
    this.googleAnalyticsService = new GoogleAnalyticsService();
  }

  ngOnInit(): void { }

  trackGoogleAnalytics(link: string) {
    this.googleAnalyticsService.eventEmitter("footer_link", "extra", "click", link);
  }
}
