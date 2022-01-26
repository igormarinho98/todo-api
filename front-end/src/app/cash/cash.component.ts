import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CashService } from './cash.service';
import { Cash } from './cash';

@Component({
  selector: 'app-cash',
  templateUrl: './cash.component.html',
  styleUrls: ['./cash.component.css']
})
export class CashComponent implements OnInit {
    cash: Cash[] = []
    form: FormGroup = new FormGroup({
      paym_name: new FormControl(''),
      description: new FormControl(''),
      dueDate: new FormControl(''), 
      value: new FormControl(''),
      paidDate: new FormControl(''),
      status: new FormControl(''),

    })


  constructor(
    private service: CashService
  ) { }

  ngOnInit() {
    this.listCash()
  }

  listCash() {
    this.service.list().subscribe(cashList => {
      this.cash = cashList
    })
  }

  submitForm() {
    const cash: Cash = {...this.form.value}
    this.service
    .save(cash)
    .subscribe(savedCash => {
      this.cash.push(savedCash)
      this.form.reset()
    })
  }

  delete(cash: Cash){
    this.service.delete(cash.id).subscribe({
      next: (response) => this.listCash()
    })
  }

  done(cash: Cash) {
    this.service.markPaid(cash.id).subscribe({
      next: (responseCash) => {
        cash.paidDate = responseCash.paidDate
        cash.status = responseCash.status
      }
    })
  }




}
