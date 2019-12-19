import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-semi-circular-progressbar',
  templateUrl: './semi-circular-progressbar.component.html',
  styleUrls: ['./semi-circular-progressbar.component.scss']
})
export class SemiCircularProgressbarComponent implements OnInit {

  @Input() match: number;
  matchCount: number = 45;
  constructor() { }

  ngOnInit() {
    this.match = this.match || 0;
    this.matchCount += this.match * 1.8
  }

}
