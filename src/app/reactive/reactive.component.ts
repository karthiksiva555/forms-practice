import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  statuses = ['Stable', 'Critical', 'Finished']
  projectForm!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      //'project': new FormControl(null, [Validators.required, this.nameTestNotAllowed]), // without async validator
      'project': new FormControl(null, [Validators.required], [this.nameTestNotAllowedAsync]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl(null)
    });
  }

  onSubmit(){
    console.log(this.projectForm);
  }

  nameTestNotAllowed(control: FormControl) {
    if(control.value === 'Test' || control.value === 'test'){
      return {'nameTestNotAllowed' : true};
    }
    return null;
  }

  nameTestNotAllowedAsync(control: AbstractControl): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      // call DB to verify if the name already exists; use setTimeout to mock async behaviour
      setTimeout(()=>{
        if(control.value === 'test' || control.value === 'Test'){
          resolve({'nameTestNotAllowed' : true});
        } else {
          resolve(null);
        }    
      },2000);          
    });
    return promise;
  }

}
