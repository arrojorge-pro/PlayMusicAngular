import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-caratula',
  templateUrl: './caratula.component.html',
  styleUrls: ['./caratula.component.css']
})
export class CaratulaComponent implements OnInit {

 @Input() caratula!:String;

  constructor() { }

  ngOnInit(): void {
  }

}
