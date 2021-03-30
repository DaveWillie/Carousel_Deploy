import { Component, OnInit } from '@angular/core';

declare var jQuery: any;


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {

  categories = ["Get a Device", "Add a phone-line", "Upgrade", "Contracts", "Mobile internet", "Home internet"];


  constructor() { }

  ngOnInit(): void {

    (function ($) {
      $(document).ready(function(){

        $(".slider").slick({
          centerMode: true,
          slidesToShow: 5,
          initialSlide: 0,
          swipeToSlide: true,
          infinite: true,
          variableWidth: true,
          respondTo: 'slider', //makes the slider to change width depending on the container it is in
          adaptiveHeight: true,
          // normal options...
          
          arrows: true,
          dots:false,
          prevArrow: $('.prev'),
          nextArrow: $('.next'),
          // the magic
          responsive: [{
         
              breakpoint: 800,
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
