import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ProductItemComponent} from '../product-item/product-item.component';
import {ActivatedRoute} from '@angular/router';
import {NgForOf} from '@angular/common';

export interface Product {
  imgSrc: string;
  name: string;
  price: number;
  category: string;
  description: string;
  link: string;
  isLiked: boolean;
}


let totalLikes = 0;

@Component({
  selector: 'app-product-list',
  imports: [
    ProductItemComponent,
    NgForOf
  ],
  standalone: true,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: Product[] = [
    {imgSrc: 'https://resources.cdn-kaspi.kz/img/m/p/h35/h8f/84378448232478.jpg?format=gallery-medium',
      name: 'Iphone 15 Pro',
      price: 250000,
      category: 'Technology',
      description: 'Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR',
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000',
      isLiked: false
    },
    {imgSrc: 'https://resources.cdn-kaspi.kz/img/m/p/p64/pde/11569142.jpg?format=gallery-medium',
      name: ' Sony WH-1000XM4 ',
      price: 114000,
      category: 'Technology',
      description: 'Узнайте, как наушники WH-1000XM4 совмещают в себе нашу лучшую технологию шумоподавления функций.',
      link: 'https://kaspi.kz/shop/p/sony-wh-1000xm4-chernyi-100471997/?c=750000000',
      isLiked: false
    },
    {imgSrc: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h56/85156619878430.png?format=gallery-medium',
      name: 'Lenovo Legion 9',
      price: 2770000,
      category: 'Technology',
      description: 'Lenovo Legion 9 16", 32GB RAM, 2TB SSD, без ОС, 16IRX8, 83AG001JRK.',
      link: 'https://kaspi.kz/shop/p/lenovo-legion-9-16-32-gb-ssd-2000-gb-bez-os-16irx8-83ag001jrk-116580486/?c=750000000',
      isLiked: false
    },
    {imgSrc: 'https://resources.cdn-kaspi.kz/img/m/p/p45/p50/12213625.png?format=gallery-medium',
      name: ' Apple iPad mini 2024',
      price: 297799,
      category: 'Technology',
      description: 'Очень удобный планшет для дома. Компактный и легкий, экран высокого качества.',
      link: 'https://kaspi.kz/shop/p/apple-ipad-mini-2024-wi-fi-8-3-djuim-8-gb-128-gb-seryi-131140447/?c=750000000',
      isLiked: false
    },
    {imgSrc: 'https://resources.cdn-kaspi.kz/img/m/p/pa8/pcc/15246242.jpeg?format=gallery-medium',
      name: 'Apple Watch Series 10 Titanium',
      price: 600000,
      category: 'Technology',
      description: 'Смарт-часы Apple Watch Series 10, 46 мм, титановый корпус, золотистый цвет, ремешок M/L.',
      link: 'https://kaspi.kz/shop/p/apple-watch-series-10-titanium-m-l-46-mm-zolotistyi-132019804/?c=750000000',
      isLiked: false
    },


    {imgSrc: 'https://m.media-amazon.com/images/I/81xcEg6jqUL._SL1500_.jpg',
      name: 'Elon Musk',
      price: 11000,
      category: 'Books',
      description: 'A #1 New York Times bestseller—an intimate look at the visionary behind EVs, space exploration, and AI.',
      link: 'https://www.amazon.com/Audible-Elon-Musk/dp/B0BX4S57GM/ref=v1fx_popular_5_re_nbs_nr_nbs_002_0?_encoding=UTF8&pd_rd_w=lj2jx&content-id=amzn1.sym.7a30df14-8061-4740-8542-1bf6eb365bbb&pf_rd_p=7a30df14-8061-4740-8542-1bf6eb365bbb&pf_rd_r=8MREXAA2DA975TWQXP71&pd_rd_wg=1dvug&pd_rd_r=a889ef29-f3b1-448e-bdea-5088dc1281fe',
      isLiked: false
    },
    {imgSrc: 'https://m.media-amazon.com/images/I/71+eijKKPYL._SL1400_.jpg',
      name: 'Steve Jobs',
      price: 16500,
      category: 'Books',
      description: 'From the author of the best-selling biographies of Benjamin Franklin and Albert Einstein',
      link: 'https://www.amazon.com/Steve-Jobs-Walter-Isaacson-audiobook/dp/B07ZMKXMTG/ref=v1fx_popular_5_re_nbs_nr_nbs_006_0?_encoding=UTF8&pd_rd_w=lj2jx&content-id=amzn1.sym.7a30df14-8061-4740-8542-1bf6eb365bbb&pf_rd_p=7a30df14-8061-4740-8542-1bf6eb365bbb&pf_rd_r=8MREXAA2DA975TWQXP71&pd_rd_wg=1dvug&pd_rd_r=a889ef29-f3b1-448e-bdea-5088dc1281fe',
      isLiked: false
    },
    {imgSrc: 'https://m.media-amazon.com/images/I/81nVkkP7BJL._SL1500_.jpg',
      name: 'The Singularity Is Nearer: When We Merge with AI',
      price: 12000,
      category: 'Books',
      description: 'The noted inventor and futurist’s successor to his landmark book Singularity Is Near',
      link: 'https://www.amazon.com/The-Singularity-Is-Nearer/dp/B08ZJRMWVS/ref=v1fx_popular_5_re_nbs_nr_nbs_020_0?_encoding=UTF8&pd_rd_w=lj2jx&content-id=amzn1.sym.7a30df14-8061-4740-8542-1bf6eb365bbb&pf_rd_p=7a30df14-8061-4740-8542-1bf6eb365bbb&pf_rd_r=8MREXAA2DA975TWQXP71&pd_rd_wg=1dvug&pd_rd_r=a889ef29-f3b1-448e-bdea-5088dc1281fe',
      isLiked: false
    },
    {imgSrc: 'https://m.media-amazon.com/images/I/81KWlVsRJgL._SL1500_.jpg',
      name: 'Dotcom Secrets',
      price: 13200,
      category: 'Books',
      description: 'Master the science of funnel building to grow your company online with sales',
      link: 'https://www.amazon.com/Dotcom-Secrets-Underground-Playbook-Growing/dp/B08B9ZHVVG/ref=v1fx_exploreMoreCard_5_re_nbs_nr_nbs_050_0?_encoding=UTF8&pd_rd_w=NQ6DR&content-id=amzn1.sym.ef3502a9-aa48-47a3-a05f-87e0d8f4558c&pf_rd_p=ef3502a9-aa48-47a3-a05f-87e0d8f4558c&pf_rd_r=8MREXAA2DA975TWQXP71&pd_rd_wg=1dvug&pd_rd_r=a889ef29-f3b1-448e-bdea-5088dc1281fe',
      isLiked: false
    },
    {imgSrc: 'https://m.media-amazon.com/images/I/71pvTTb9R5L._SL1500_.jpg',
      name: 'ChatGPT Money Machine 2024',
      price: 17400,
      category: 'Books',
      description: 'Fast-forward a few years, and those who got in early are laughing all the way to the bank.',
      link: 'https://www.amazon.com/ChatGPT-Money-Machine-2024-Beginners/dp/B0CYVGZ3L4/ref=v1fx_exploreMoreCard_5_re_nbs_nr_nbs_110_0?_encoding=UTF8&pd_rd_w=NQ6DR&pd_rd_wg=1dvug&pd_rd_r=a889ef29-f3b1-448e-bdea-5088dc1281fe&content-id=amzn1.sym.ef3502a9-aa48-47a3-a05f-87e0d8f4558c',
      isLiked: false
    },



    {imgSrc: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/42a00940d36c4767b92572f9664d325e_9366/Z.N.E._Full-Zip_Hooded_Track_Jacket_White_JF2443_21_model.jpg',
      name: 'Zip Hooded Track Jacket',
      price: 35000,
      category: 'Clothing',
      description: 'Zip up and find your focus in this adidas track jacket. The cozy three-layer double knit fabric',
      link: 'https://www.adidas.com/us/z.n.e.-full-zip-hooded-track-jacket/JF2443.html',
      isLiked: false
    },
    {imgSrc: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/e919488b926649b29c744f36e6d926d9_9366/Parachute_Pants_Black_JD5415_21_model.jpg',
      name: 'Parachute Pants',
      price: 50000,
      category: 'Clothing',
      description: 'These adidas Parachute Pants are perfect for those days when you want to keep things laid-back.',
      link: 'https://www.adidas.com/us/parachute-pants/JD5415.html',
      isLiked: false
    },
    {imgSrc: 'https://assets.armani.com/image/upload/f_auto,q_auto:best,ar_4:5,w_1350,c_fill/XM000352_AF10818_U0009_F_SS2025.jpg',
      name: 'Half zip hoodie',
      price: 78000,
      category: 'Clothing',
      description: 'Bonded cotton sweatshirt, perfect for a casual and contemporary look. The hood adds practicality and style,',
      link: 'https://www.armani.com/en-us/armani-exchange/half-zip-hoodie-cod-XM000352-AF10818-U0009/',
      isLiked: false
    },
    {imgSrc: 'https://shoqansuits.com/static/7b081dc8-57b4-438f-ba16-b78c1314b55c',
      name: 'Бежевый однобортный костюм',
      price: 280000,
      category: 'Clothing',
      description: 'Бежевый однобортный костюм из шерсти — это идеальное сочетание классики и лёгкости.',
      link: 'https://shoqansuits.com/men/product/0f4716b3-dfe0-487e-bfa5-4feed849e292',
      isLiked: false
    },
    {imgSrc: 'https://shoqansuits.com/static/bda5cbc7-0e89-4334-b752-59aab83d19c4',
      name: 'Черное короткое пальто',
      price: 76500,
      category: 'Clothing',
      description: 'Черное короткое пальто - идеальный выбор для создания элегантного городского образа.',
      link: 'https://shoqansuits.com/men/product/9c120661-584c-44ad-867c-8d9e5d46e28e',
      isLiked: false
    },


    {imgSrc: 'https://shoqansuits.com/static/909897a5-6579-47ed-a601-14f17a14831c',
      name: 'Коричневые ботинки',
      price: 84900,
      category: 'Shoes',
      description: 'Теплые зимние ботинки цвета дерева Сапеле, как внутрення отделка салона автомобиля Mersedes-Benz.',
      link: 'https://shoqansuits.com/men/product/fd0bcb83-01af-457c-a9dd-36a14318cae0',
      isLiked: false
    },
    {imgSrc: 'https://shoqansuits.com/static/3cb42397-177b-4c30-891d-905a6b58fdd0',
      name: 'Броги темно-коричневого цвета',
      price: 70000,
      category: 'Shoes',
      description: 'Бордовые туфли из натуральной глянцевой кожи с закрытой шнуровкой.',
      link: 'https://shoqansuits.com/men/product/e370ad12-9295-4c81-9244-6db9045854fe',
      isLiked: false
    },
    {imgSrc: 'https://shoqansuits.com/static/e9871474-852c-4661-b044-fa525b293318',
      name: 'Черные дерби с глянцевым блеском и открытой шнуровкой',
      price: 75000,
      category: 'Shoes',
      description: 'В осенне-зимнюю коллекцию бренда Shoqan вошли дерби универсального черного цвета. ',
      link: 'https://shoqansuits.com/men/product/3903d413-4111-4cb4-93d0-3503e5e9171b',
      isLiked: false
    },
    {imgSrc: 'https://shoqansuits.com/static/7a63cbce-d412-4f9c-8f26-91a11f66fbf7',
      name: 'Челси с пряжкой',
      price: 76500,
      category: 'Shoes',
      description: 'Черные ботинки из натуральной телячьей кожи на каучуковой подошве. Ботинки декорированы стильными пряжками.',
      link: 'https://shoqansuits.com/men/product/3d230795-a63b-4480-850b-5b06754d8d0c',
      isLiked: false
    },
    {imgSrc: 'https://shoqansuits.com/static/25371f11-d227-4604-870c-830ee3524d48',
      name: 'Пенни - лоферы из натуральной кожи',
      price: 85000,
      category: 'Shoes',
      description: 'Эти пенни-лоферы выполнены из высококачественной натуральной кожи в элегантном коричневом цвете.',
      link: 'https://shoqansuits.com/men/product/0796f4a7-536c-4c73-bb0e-6262093a6820',
      isLiked: false
    },
  ];
  filteredProducts: Product[] = [];
  @Output() totalCountEmit = new EventEmitter<number>();


  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const category = params.get('category');
      if (category) {
        this.filteredProducts = this.products.filter(p => p.category === category);
      } else {
        this.filteredProducts = this.products;
      }
    });
  }

  public totalCountHandler(num: number) {
    this.totalCountEmit.emit(num);
  }




}
