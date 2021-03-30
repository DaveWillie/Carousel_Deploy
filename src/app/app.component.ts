import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  
  
  stripes = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
  
  title = 'Carousel';


  index = 0;

  constructor() { }

  ngOnInit(){

    
  }

}
