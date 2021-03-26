import { Component, OnInit } from '@angular/core';

import { Slick } from 'slick-carousel';


declare var jQuery: any;
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
declare var TimelineMax:any;
declare var Draggable:any;
declare var angular: any;

function hello() {

}


@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {

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
         
              breakpoint: 1024,
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
