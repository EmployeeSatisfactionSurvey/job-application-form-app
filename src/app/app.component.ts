import { Component, OnInit } from '@angular/core';
import { StylesManager, Model } from 'survey-core';
import 'survey-core/survey.i18n';
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

    // access to the uploaded files
    form.onUploadFiles.add((form, options) => {
      console.log('File uploaded');
      var formData = new FormData();
      options.files.forEach(function (file: any) {
        formData.append(file.name, file);
      });
    });

    // To switch the language
    form.locale = 'fr';
    // form.locale = "en"

    this.jobApplicationForm = form;
  }
}
