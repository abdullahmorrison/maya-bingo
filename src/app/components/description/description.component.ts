import { GoogleAnalyticsService } from './../../services/google-analytics.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {
  googleAnalyticsService: GoogleAnalyticsService

  constructor() { 
    this.googleAnalyticsService = new GoogleAnalyticsService();
  }

  ngOnInit(): void { }

  trackGoogleAnalytics(): void{
    this.googleAnalyticsService.eventEmitter("description_link", "extra", "click", "twitch.tv/maya");
  }
}
