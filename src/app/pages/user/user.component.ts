import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from '../../tools/entities.interfaces';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BsDatepickerConfig, BsLocaleService } from 'ngx-bootstrap/datepicker';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  public idUser: number;
  public formUser: FormGroup;
  public user: User;
  public searching: boolean;
  public minDate: Date = new Date();
  public bsConfig: Partial<BsDatepickerConfig>;
  public weeks: Array<number>;
  public saving: boolean;

  constructor(private actRouter: ActivatedRoute,
              private api: ApiService,
              private localeService: BsLocaleService,
              private router: Router) {

    this.minDate.setDate(this.minDate.getDate() + 1);
    this.weeks = new Array<number>( 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 );
    this.bsConfig = Object.assign({}, { containerClass: 'theme-red', dateInputFormat: 'YYYY-MM-DD', });
    this.localeService.use('es');

    this.idUser = Number(this.actRouter.snapshot.paramMap.get("id"));

    if ( !!this.idUser ) {

      this.searching = true;

      this.api.getUserById(this.idUser).subscribe(resp => {
        console.log(resp);
        this.user = resp.data;
        this.formUser = new FormGroup({
          name: new FormControl(this.user.name, Validators.required),
          surname: new FormControl(this.user.surname, Validators.required),
          email: new FormControl(this.user.email, Validators.required),
          phone: new FormControl(this.user.phone, Validators.required),
          age: new FormControl(this.user.age, Validators.required),
          loan_amount: new FormControl(this.user.loan_amount, Validators.required, this.amountValidator.bind(this)),
          loan_date: new FormControl(this.user.loan_date, Validators.required),
          loan_weeks: new FormControl(this.user.loan_weeks, Validators.required),
          check: new FormControl(false, Validators.requiredTrue)
        });

        this.searching = false;
        
      }, (err: HttpErrorResponse) => {
        this.router.navigate(['/no-user']);
      });
    } else {
      this.router.navigate(['/no-user']);
    }

  }

  updateUser() {
    this.saving = true;
    const userMod: User = {
      id: this.idUser,
      name: this.user.name,
      surname: this.user.surname,
      email: this.user.email,
      phone: this.formUser.controls.phone.value,
      age: +this.formUser.controls.age.value,
      loan_amount: +this.formUser.controls.loan_amount.value,
      loan_date: this.formUser.controls.loan_date.value,
      loan_weeks: this.formUser.controls.loan_weeks.value,
    };

    console.log('Usuario a guardar', userMod);

    this.api.postUser(1, userMod).subscribe(resp => {
      localStorage.setItem('user', JSON.stringify(userMod));
      this.router.navigate(['/gracias']);
    }, (err: HttpErrorResponse) => {
      this.router.navigate(['/error']);
    })
  }

  amountValidator(control: FormControl): Promise<any>|Observable<any> {
    const this$: any = this;
    const promesa = new Promise(
      (resolve, reject) => {
        if ( +control.value > 10 && +control.value <= 1000 ) {
          resolve(null);
        } else {
          resolve({invalid: true});
        }
      }
    );
    return promesa;
  }

}
