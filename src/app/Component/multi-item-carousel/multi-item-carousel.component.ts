import { Component, OnInit } from '@angular/core';

// export class MultiItemCarouselComponent implements OnInit {


@Component({
  selector: 'app-multi-item-carousel',
  templateUrl: './multi-item-carousel.component.html',
  styleUrls: ['./multi-item-carousel.component.scss'],
})
export class MultiItemCarouselComponent implements OnInit {
  cards = [
    {
      title: 'Mobile Phones',
      description: 'Mobile shopping has reshaped the consumer decision journey. ... Thirty-four percent of online',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(1).jpg'
    },
    {
      title: 'Laptop',
      description: ' Laptop specialized in laptops from brands like Acer, HP Pavilion, Bell and desktop computers.',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(2).jpg'
    },
    {
      title: 'Dgital Devices',
      description: 'Consumer electronics or home electronic Consumer electronics include devices used for entertainment ',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(3).jpg'
    },
    {
      title: 'Fast Food',
      description: 'A fast food restaurant, also known as a quick service restaurant (QSR) within the industry,',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(4).jpg'
    },
    {
      title: 'Resturents',
      description: 'Free Shipping Available on 1000+ Products. Best Prices Online. 24 Hour Customer Service',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(5).jpg'
    },
    {
      title: 'Hotels',
      description: 'Compare 93 hotels near The Shops at Legacy in Plano using 20844 real guest reviews.',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(6).jpg'
    },
    {
      title: 'Dressing',
      description: 'Review feminine, chic and sophisticated dresses are perfect silhouettes with a hint of elegance',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(7).jpg'
    },
    {
      title: 'Shoes',
      description: 'Passion Soles womens shoe store business plan executive summary. Passion Soles is an upscale.',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(8).jpg'
    },
    {
      title: 'Cosmetics',
      description: 'Cosmetics are substances to enhance or alter the appearance of the face cosmetics are designed',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(9).jpg'
    },
  ];
  slides: any = [[]];
  chunk(arr, chunkSize) {
    const R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }
  ngOnInit() {
    this.slides = this.chunk(this.cards, 3);
  }
}
