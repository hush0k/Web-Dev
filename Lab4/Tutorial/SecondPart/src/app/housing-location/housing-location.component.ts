import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';
import { RouterLink, RouterOutlet } from '@angular/router'; // Import RouterLink and RouterOutlet

@Component({
  selector: 'app-housing-location',
  imports: [CommonModule, RouterLink, RouterOutlet], // Add RouterLink and RouterOutlet to imports
  templateUrl: './housing-location.component.html',
  styleUrls: ['./housing-location.component.css'],
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}