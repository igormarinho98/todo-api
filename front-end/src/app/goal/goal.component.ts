import { Component, OnInit } from '@angular/core';
import { Goal } from './goal';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GoalService } from '../services/goal.service';
@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  goals: Goal[] = []
  formGoal: FormGroup = new FormGroup({
    id: new FormControl(''),
    username: new FormControl(''),
    deadline: new FormControl(''),
    term: new FormControl(''),
    moneyGoal: new FormControl(''),
    goalName: new FormControl(''),
    description: new FormControl(''),
    level: new FormControl(''),
    status: new FormControl(''),
    lifeArea: new FormControl(''),
    createdDate: new FormControl(''),
    name: new FormControl(''),
  

  })



  constructor(
    private service: GoalService
  ) { }

  ngOnInit(): void {
    this.listGoal()
  }

  listGoal() {
    this.service.list().subscribe(goalList => {
      this.goals = goalList
    })
  }

  submitForm() {
    const goal: Goal = {...this.formGoal.value}
    this.service
    .save(goal)
    .subscribe(savedGoal => {
      this.goals.push(savedGoal)
      this.formGoal.reset()
    })
  }  

  delete(goal: Goal) {
    this.service.delete(goal.id).subscribe({
      next: (response) => this.listGoal()
    })
  }

  statusUpd(goal: Goal) {
    this.service.statusUpd(goal.id).subscribe({
      next: (responseGoal) => {
        goal.status = responseGoal.status
      }
    })
  }


}
