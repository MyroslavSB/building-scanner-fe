import { Component } from '@angular/core';
import {IBuilding} from "../../../../../shared/interfaces/i-building";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {SbButtonComponent} from "../../../../../shared/components/sb-button/sb-button.component";

@Component({
  selector: 'app-buildings-page',
  standalone: true,
  imports: [
    NgForOf,
    NgClass,
    SbButtonComponent,
    NgIf
  ],
  templateUrl: './buildings-page.component.html',
  styleUrl: './buildings-page.component.scss'
})
export class BuildingsPageComponent {
  public buildings: IBuilding[] = [
    {
      name: 'Empire State Building',
      location: 'New York, NY',
      description: 'A famous skyscraper located in Midtown Manhattan.',
      created_by: 'Empire State Realty Trust',
      visited: false
    },
    {
      name: 'Burj Khalifa',
      location: 'Dubai, UAE',
      description: 'The tallest building in the world, standing at 828 meters.',
      created_by: 'Emaar Properties',
      visited: false
    },
    {
      name: 'Eiffel Tower',
      location: 'Paris, France',
      description: 'A wrought-iron lattice tower on the Champ de Mars.',
      created_by: 'City of Paris',
      visited: false
    },
    {
      name: 'Empire State Building',
      location: 'New York, NY',
      description: 'A famous skyscraper located in Midtown Manhattan.',
      created_by: 'Empire State Realty Trust',
      visited: false

    },
    {
      name: 'Empire State Building',
      location: 'New York, NY',
      description: 'A famous skyscraper located in Midtown Manhattan.',
      created_by: 'Empire State Realty Trust',
      visited: true
    }
  ]
}
