import {Component} from '@angular/core';
import {IBuilding} from "../../../../../shared/interfaces/core-models/i-building";
import {FormControl, FormsModule} from "@angular/forms";
import {SbButtonComponent} from "../../../../../shared/components/sb-button/sb-button.component";
import {SbInputComponent} from "../../../../../shared/components/sb-input/sb-input.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-building-page',
  standalone: true,
  imports: [
    FormsModule,
    SbButtonComponent,
    SbInputComponent,
    NgForOf
  ],
  templateUrl: './building-page.component.html',
  styleUrl: './building-page.component.scss'
})
export class BuildingPageComponent {
  public building: IBuilding = {
    id: 4,
    name: 'Empire State Building',
    location: 'New York, NY',
    description: 'A famous skyscraper located in Midtown Manhattan.',
    created_by: 'Empire State Realty Trust',
    visited: false
  }
  newMessage: FormControl = new FormControl('')

  messages: { user: string, text: string }[] = [
    {user: 'User1', text: 'This building is amazing!'},
    {user: 'User2', text: 'I visited last week and it was great.'}
  ]

  sendMessage(): void {
    if (this.newMessage.value.trim()) {
      this.messages.push({user: 'CurrentUser', text: this.newMessage.value});
      this.newMessage.setValue('');
    }
  }
}
