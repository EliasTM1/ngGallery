import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() progress : number = 20;


  changeMyValue() {
    setTimeout(() => {
      this.progress = 30
    }, 1000);
    setTimeout(() => {
      this.progress = 40
    }, 2000);
    setTimeout(() => {
      this.progress = 50
    }, 3000);
    setTimeout(() => {
      this.progress = 70
    }, 4000);

  }
}
