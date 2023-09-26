import { Component, Input } from '@angular/core';
import { ValidationMessage } from 'src/app/shared/models/Control';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent {
  @Input() validationMessages:ValidationMessage[]=[]
}
