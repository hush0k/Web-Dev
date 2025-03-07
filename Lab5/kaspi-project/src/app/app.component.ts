import {Component, Input} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {CategoryComponent} from './category/category.component';
import {HomeComponent} from './home/home.component';
import {ProductItemComponent} from './product-item/product-item.component';
import {ProductListComponent} from './product-list/product-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'aspic-project';
  // @Input() totalLikes!: number;
}
