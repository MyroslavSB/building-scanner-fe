import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  EventEmitter,
  inject,
  OnInit
} from '@angular/core';
import {UserInfoService} from "../../../../../services/user-info/user-info.service";
import {AsyncPipe, DatePipe, NgForOf, NgIf} from "@angular/common";
import {Observable, switchMap} from "rxjs";
import {IUser} from "../../../../../shared/interfaces/core-models/i-user";
import {VisitsApiService} from "../../../../../services/visits-api/visits-api.service";
import {BuildingsApiService} from "../../../../../services/buildings-api/buildings-api.service";
import {AchievementsApiService} from "../../../../../services/achievements-api/achievements-api.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {IVisit} from "../../../../../shared/interfaces/core-models/i-visit";
import {IAchievement} from "../../../../../shared/interfaces/core-models/i-achievement";
import {IBuilding} from "../../../../../shared/interfaces/core-models/i-building";
import {EUserRoles} from "../../../../../services/user-info/utils/e-user-roles";
import {SbButtonComponent} from "../../../../../shared/components/sb-button/sb-button.component";
import {Router} from "@angular/router";
import {AppRoutes} from "../../../../../shared/const/routes";
import {AuthApiService} from "../../../../../services/auth-api-service/auth-api.service";
import {SbInputComponent} from "../../../../../shared/components/sb-input/sb-input.component";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [
    NgForOf,
    AsyncPipe,
    DatePipe,
    NgIf,
    SbButtonComponent,
    SbInputComponent
  ],
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss', '../buildings-page/buildings-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfilePageComponent implements OnInit {

  private destroyRef$: DestroyRef = inject(DestroyRef)
  public userInfo$: Observable<IUser> = this.userInfoService.userInfo.asObservable()

  public userRoles = EUserRoles

  public visits: IVisit[] = []
  public achievements: IAchievement[] = []
  public createdBuildings: IBuilding[] = []

  public createBuildingForm: FormGroup

  constructor(
    private cdRef: ChangeDetectorRef,
    private userInfoService: UserInfoService,
    private visitsApi: VisitsApiService,
    private buildingsAPI: BuildingsApiService,
    private achievementsAPI: AchievementsApiService,
    private authAPI: AuthApiService,
    private router: Router,
    private fb: FormBuilder
  ) {
  }

  ngOnInit() {
    this.getLists()

    this.initForm()
  }

  private getLists(): void {
    this.getUserInfo()
      .pipe(
        switchMap(user => {
          this.userInfoService.userInfo.next(user);
          if (user.role === this.userRoles.ADMIN) {
            return this.buildingsAPI.getUserBuildings();
          } else {
            return this.visitsApi.getVisits().pipe(
              switchMap(visits => {
                this.visits = visits;
                return this.achievementsAPI.getAchievements();
              })
            );
          }
        }),
        takeUntilDestroyed(this.destroyRef$)
      )
      .subscribe(data => {
        if (this.userInfoService.userInfo.getValue().role === this.userRoles.ADMIN) {
          this.createdBuildings = data as IBuilding[];
        } else {
          this.achievements = data as IAchievement[];
        }
        this.cdRef.detectChanges();
      });

  }

  private initForm(): void {
    this.createBuildingForm = this.fb.group({
      name: ['Some Name'],
      description: ['Some Description'],
      latitude: [55],
      longitude: [55]

    })
  }


  private getUserInfo(): Observable<IUser> {
    return this.authAPI.getUserInfo()
      .pipe(takeUntilDestroyed(this.destroyRef$))

  }

  public logOut(): void {
    localStorage.clear()
    this.router.navigate([AppRoutes.login.routerPath])
  }

  public deleteBuilding(building: IBuilding): void {
    this.buildingsAPI.deleteBuilding(building.id)
      .pipe(takeUntilDestroyed(this.destroyRef$))
      .subscribe(deleted => {
        this.createdBuildings = this.createdBuildings.filter(build => build.id !== building.id)
        this.cdRef.detectChanges()
      })
  }

  public getControl(form: FormGroup, controlName: string): FormControl {
    return form?.get(controlName) as FormControl;
  }

  public createBuilding(): void {
    const {latitude, longitude, name, description} = this.createBuildingForm.getRawValue()
    this.buildingsAPI.createBuilding({
      name,
      description,
      location: {
        latitude: Number(latitude),
        longitude: Number(longitude)
      }
    }).pipe(takeUntilDestroyed(this.destroyRef$))
      .subscribe(building => {
        this.createBuildingForm.reset({}, {onlySelf: true})
        this.createdBuildings.push(building)
        this.cdRef.detectChanges()
      })
  }
}
