import { Component, Input } from '@angular/core';

@Component({
  selector: 'ccd-activity-banner',
  templateUrl: './activity-banner.component.html',
  styleUrls: ['./activity-banner.component.css']
})
export class ActivityBannerComponent {
  @Input()
  public bannerType: string;

  @Input()
  public description: string;

  @Input()
  public imageLink: string;
}
