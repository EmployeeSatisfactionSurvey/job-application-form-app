import { Component, OnInit } from '@angular/core';
import { StylesManager, Model } from 'survey-core';

import { schema } from './form.schema';
StylesManager.applyTheme('defaultV2');
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'job-application-form-app';
  jobApplicationForm!: Model;
  ngOnInit(): void {
    const form = new Model(schema);
    this.jobApplicationForm = form;
  }
}
