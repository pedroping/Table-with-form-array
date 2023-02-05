import { Component } from "@angular/core";
import { FormGroup, FormArray, FormBuilder, Validators } from "@angular/forms";
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public invoiceForm: FormGroup;
  constructor(private _fb: FormBuilder) {}
  ngOnInit() {
    this.invoiceForm = this._fb.group({
      Rows: this._fb.array([this.initRows()])
    });
  }

  get formArr() {
    return this.invoiceForm.get("Rows") as FormArray;
  }

  initRows() {
    return this._fb.group({
      name: [""],
      sexo: ['']
    });
  }

  addNewRow() {
    this.formArr.push(this.initRows());
  }

  deleteRow(index: number) {
    this.formArr.removeAt(index);
  }
}
