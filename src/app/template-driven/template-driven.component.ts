import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  subscriptions = ['Basic', 'Advanced', 'Pro'];
  defaultSub: string = "Advanced";
  @ViewChild('f')
  form!: NgForm;
  
  constructor() { }
  
  ngOnInit(): void {
  }
  
  onSubmit(){
    console.log(this.form);
  }
}
