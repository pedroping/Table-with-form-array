import { Component } from '@angular/core';
import {
  FormGroup,
  FormArray,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public invoiceForm: FormGroup;
  constructor(private _fb: FormBuilder) {}
  ngOnInit() {
    this.invoiceForm = new FormGroup({
      Rows: new FormArray([this.initRows()], Validators.required),
    });

    this.invoiceForm.valueChanges.subscribe((x) => {
      console.log('Form', x.Rows[0], this.formArr.valid, 
      this.formArr.controls[0].valid);
    });
  }

  get formArr() {
    return this.invoiceForm.get('Rows') as FormArray;
  }

  initRows() {
    return new FormGroup({
      name: new FormControl('', Validators.required),
      sexo: new FormControl('', Validators.required),
    });
  }

  addNewRow() {
    this.formArr.push(this.initRows());
  }

  deleteRow(index: number) {
    this.formArr.removeAt(index);
  }
}
