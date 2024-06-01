import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {IBuilding} from "../../../../../shared/interfaces/core-models/i-building";
import {FormControl, FormsModule} from "@angular/forms";
import {SbButtonComponent} from "../../../../../shared/components/sb-button/sb-button.component";
import {SbInputComponent} from "../../../../../shared/components/sb-input/sb-input.component";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {BuildingsApiService} from "../../../../../services/buildings-api/buildings-api.service";
import {filter, Observable, switchMap} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-building-page',
  standalone: true,
  imports: [
    FormsModule,
    SbButtonComponent,
    SbInputComponent,
    NgForOf,
    NgIf,
    NgClass
  ],
  templateUrl: './building-page.component.html',
  styleUrls: ['./building-page.component.scss', '../buildings-page/buildings-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BuildingPageComponent implements OnInit {
  public building: IBuilding

  private buildingId: number = null

  newMessage: FormControl = new FormControl('')

  messages: { user: string, text: string }[] = [
    {user: 'User1', text: 'This building is amazing!'},
    {user: 'User2', text: 'I visited last week and it was great.'}
  ]

  constructor(
    private buildingsAPI: BuildingsApiService,
    private route: ActivatedRoute,
    private cdRef: ChangeDetectorRef
  ) {

  }

  ngOnInit() {
    this.route.paramMap
      .pipe(
        filter(params => {
          return !!params.get('id')
        }),
        switchMap(params => {
          this.buildingId = Number(params.get('id'))

          return this.getBuildingInfo(this.buildingId)
        })
      ).subscribe(building => {
      this.building = building
      this.cdRef.detectChanges()
    })
  }

  private getBuildingInfo(id: number): Observable<IBuilding> {
    return this.buildingsAPI.getBuilding(id)
  }

  public sendMessage(): void {
    if (this.newMessage.value.trim()) {
      this.messages.push({user: 'CurrentUser', text: this.newMessage.value});
      this.newMessage.setValue('');
    }
  }
}
