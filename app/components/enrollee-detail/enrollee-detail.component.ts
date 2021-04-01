import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { EnroleesService } from 'src/app/services/enrolees.service';
import { takeUntil } from 'rxjs/operators';
import { Enrollee } from 'src/app/interfaces/enrollee.interface';
@Component({
  selector: 'app-enrollee-detail',
  templateUrl: './enrollee-detail.component.html',
  styleUrls: ['./enrollee-detail.component.scss'],
})
export class EnrolleeDetailComponent implements OnInit {
  enrolleeId = '';
  name: FormControl;
  id: FormControl;
  dateOfBirth: FormControl;
  isActive: FormControl;
  private readonly destroy$ = new Subject();

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private enrolleeService: EnroleesService
  ) {
    this.activatedRoute.params
      .pipe(takeUntil(this.destroy$))
      .subscribe((params) => {
        this.enrolleeId = params['id'];
      });
      this.name = this.fb.control({
        value: '',
        disabled: false,
      });
      this.id = this.fb.control({ value: '', disabled: true });
      this.dateOfBirth = this.fb.control({
        value: '',
        disabled: true,
      });
      this.isActive = this.fb.control({
        value: '',
        disabled: false,
      });
  }

  ngOnInit(): void {
    this.enrolleeService
      .getEnroleesDetails(this.enrolleeId)
      .pipe(takeUntil(this.destroy$))
      .subscribe((enrolleeDetails : Enrollee) => {
        this.assignValuesToForm(enrolleeDetails);
      });
  }

  assignValuesToForm(enrolleeDetails: Enrollee) {
    this.name.setValue(enrolleeDetails.name);
    this.id.setValue(enrolleeDetails.id);
    this.isActive.setValue(enrolleeDetails.active);
    this.dateOfBirth.setValue(enrolleeDetails.dateOfBirth)
  }

  submitForm() {
    const requestData: Enrollee = {
      active: this.isActive.value,
      name: this.name.value,
      dateOfBirth: this.dateOfBirth.value,
      id: this.id.value
    };
    this.enrolleeService
      .editEnroleesDetails(requestData, this.id.value)
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        (enrolleeDetails: Enrollee) => {
          alert('Edited successfully');
          this.assignValuesToForm(enrolleeDetails);
        },
        (error) => {
          alert('Something went wrong' + error);
        }
      );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
