import { Component } from '@angular/core';

@Component({
  templateUrl: 'build/pages/settings/settings.html'
})

export class SettingsPage {

  devList: Array<{text: string, checked: boolean}> = [
    { text: 'HTML5', checked: true },
    { text: 'CSS3', checked: false },
    { text: 'JavaScript', checked: false }
  ];

  darkThemeChecked: boolean = false;

  constructor() { }

  isChecked(bool) {
    console.log(!this.darkThemeChecked);
  }
}