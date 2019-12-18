import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lmapp-date',
  templateUrl: './lmapp-date.component.html',
  styleUrls: ['./lmapp-date.component.css']
})
export class LmappDateComponent implements OnInit {
  
  @Input() public date : Date;
  @Input() public title : string;
  public dateDay : number;
  public dateMonth : number;
  public dateYear : number;
  constructor() { 
  }

  ngOnInit() {
    this.dateDay = this.date.getDate();
    this.dateMonth = this.date.getMonth() + 1;
    this.dateYear = this.date.getUTCFullYear();
  }

}
