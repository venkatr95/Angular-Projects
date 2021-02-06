import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ComboBoxComponent } from './combo-box/combo-box.component';
import { ComboBoxPipe } from './combo-box/combo-box.pipe';
import { Skill, SKILLS } from './combo-box/sample-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-combo-box';
  
  dummyDataList: Array<string>;
  showDropDown: boolean;
  dataList: Skill[];
  constructor() {
    this.dataList = SKILLS;
  }
}
