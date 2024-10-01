import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  username: string = '';
  password: string = '';
  domain: string = '';

  constructor() {}

  connect() {}
}
