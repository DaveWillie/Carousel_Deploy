import { Component, OnInit } from '@angular/core';

import { Slick } from 'slick-carousel';


declare var jQuery: any;



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

    
    (function ($) {
      $(document).ready(function(){

        $(".slider").slick({
          centerMode: true,
          slidesToShow: 5,
          initialSlide: 0,
          swipeToSlide: true,
          // normal options...
          
          arrows: true,
          dots:false,
          prevArrow: $('.prev'),
          nextArrow: $('.next'),

          // the magic
          responsive: [{
         
              breakpoint: 1324,
              settings: {
                dots:false,
                slidesToShow: 3,
                infinite: true
              }
         
            }, {
         
              breakpoint: 600,
              settings: {
                dots:false,
                slidesToShow: 1,
              }
         
            }, {
         
              breakpoint: 300,
              settings: "unslick" // destroys slick
         
            }]
        });

        $('.slider').on('afterChange', function (event, slick, currentSlide) {     

          console.log('afterChange, currentSlide: ', window['index']);
        });

        $('.next').on('click', function(ev){

          window['index'] =  $(ev.currentTarget).data('slick-index');
          
          console.log('onClick slick-index:', this.index);
        });

      });
    })(jQuery);
  }

}
