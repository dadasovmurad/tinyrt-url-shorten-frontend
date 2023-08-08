import { Component, NgZone, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-url-generate-advanced-settings',
  templateUrl: './url-generate-advanced-settings.component.html',
  styleUrls: ['./url-generate-advanced-settings.component.css'],
})
export class UrlGenerateAdvancedSettingsComponent implements OnInit {
  isCollapsedAdvancedSettings: boolean = true;
  customUrl: string = '';
  readonly previewUrl: string = 'tinyrt.io/';
  ngOnInit(): void {}
  constructor(private ngZone: NgZone) {}

  toggleCollapse() {
    this.ngZone.runOutsideAngular(() => {
      this.isCollapsedAdvancedSettings = !this.isCollapsedAdvancedSettings;
    });
  }
}
