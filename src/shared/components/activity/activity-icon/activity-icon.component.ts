import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ccd-activity-icon',
  templateUrl: './activity-icon.component.html',
  styleUrls: ['./activity-icon.component.css']
})
export class ActivityIconComponent {
  @Input()
  public description: string;

  @Input()
  public imageLink: string;

}
