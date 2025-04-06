import {Component, EventEmitter, Input, Output} from '@angular/core';
import {DecimalPipe, NgClass} from '@angular/common';
import {Product} from '../product-list/product-list.component';

let totalLike = 0;

@Component({
  selector: 'app-product-item',
  imports: [
    NgClass,
    DecimalPipe
  ],
  templateUrl: './product-item.component.html',
  standalone: true,
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  // @Input() imgSrc!: string;
  // @Input() name!: string;
  // @Input() price!: number;
  // @Input() category!: string;
  // @Input() description!: string;
  // @Input() link!: string;


  @Input() product!: Product;

  @Output() likeChanged = new EventEmitter<number>();




  toggleLike() {
    if(!this.product.isLiked){
        totalLike++;
    } else{
      totalLike--;
    }
    this.product.isLiked = !this.product.isLiked;

    this.likeChanged.emit(totalLike);
    console.log(totalLike);
  }


  shareProductW() {
    const url = encodeURIComponent(this.product.link);
    let shareUrl = `https://wa.me/?text=+${url}`;
    window.open(shareUrl, '_blank');
  }
}
