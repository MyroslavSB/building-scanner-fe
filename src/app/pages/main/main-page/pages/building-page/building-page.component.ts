import {ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, inject, OnInit} from '@angular/core';
import {IBuilding} from "../../../../../shared/interfaces/core-models/i-building";
import {FormControl, FormsModule} from "@angular/forms";
import {SbButtonComponent} from "../../../../../shared/components/sb-button/sb-button.component";
import {SbInputComponent} from "../../../../../shared/components/sb-input/sb-input.component";
import {AsyncPipe, DatePipe, NgClass, NgForOf, NgIf} from "@angular/common";
import {BuildingsApiService} from "../../../../../services/buildings-api/buildings-api.service";
import {filter, Observable, switchMap, takeUntil} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {MessagesApiService} from "../../../../../services/messages-api/messages-api.service";
import {IMessage} from "../../../../../shared/interfaces/core-models/i-message";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {VisitsApiService} from "../../../../../services/visits-api/visits-api.service";
import {UserInfoService} from "../../../../../services/user-info/user-info.service";
import {IUser} from "../../../../../shared/interfaces/core-models/i-user";

@Component({
  selector: 'app-building-page',
  standalone: true,
  imports: [
    FormsModule,
    SbButtonComponent,
    SbInputComponent,
    NgForOf,
    NgIf,
    NgClass,
    DatePipe,
    AsyncPipe
  ],
  templateUrl: './building-page.component.html',
  styleUrls: ['./building-page.component.scss', '../buildings-page/buildings-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BuildingPageComponent implements OnInit {
  private destroyRef$: DestroyRef = inject(DestroyRef)
  public building: IBuilding

  private buildingId: number = null

  public newMessage: FormControl = new FormControl('')

  public messages: IMessage[] = []

  public userInfo$: Observable<IUser> = this.userInfoService.userInfo.asObservable()

  constructor(
    private buildingsAPI: BuildingsApiService,
    private messagesAPI: MessagesApiService,
    private visitsAPI: VisitsApiService,
    private userInfoService: UserInfoService,
    private route: ActivatedRoute,
    private cdRef: ChangeDetectorRef
  ) {

  }

  ngOnInit() {
    this.route.paramMap
      .pipe(
        takeUntilDestroyed(this.destroyRef$),
        filter(params => {
          return !!params.get('id')
        }),
        switchMap(params => {
          this.buildingId = Number(params.get('id'))

          return this.getBuildingInfo(this.buildingId)
            .pipe(
              switchMap(building => {
                this.building = building
                return this.getBuildingMessages()
              })
            )
        })
      ).subscribe(messages => {
      this.messages = messages
      this.cdRef.detectChanges()
    })
  }

  private getBuildingInfo(id: number): Observable<IBuilding> {
    return this.buildingsAPI.getBuilding(id)
  }

  public sendMessage(): void {
    if (this.newMessage.value.trim().length > 0) {
      this.messagesAPI.sendMessage(this.buildingId, this.newMessage.value)
        .pipe(takeUntilDestroyed(this.destroyRef$))
        .subscribe(message => {
          this.messages.push(message)
          this.cdRef.detectChanges()
        })
    }
  }

  private getBuildingMessages(): Observable<IMessage[]> {
    return this.messagesAPI.getMessages(this.buildingId)

  }

  public visitBuilding(): void {
    this.visitsAPI.visitBuilding(this.buildingId)
      .pipe(
        takeUntilDestroyed(this.destroyRef$)
      ).subscribe(visit => {
      this.building.visited = true
      this.cdRef.detectChanges()
    })
  }
}
