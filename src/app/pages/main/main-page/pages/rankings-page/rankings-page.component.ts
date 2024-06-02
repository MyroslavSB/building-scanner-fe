import {ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, inject, OnInit} from '@angular/core';
import {EUserRoles} from "../../../../../services/user-info/utils/e-user-roles";
import {NgForOf} from "@angular/common";
import {IUser} from "../../../../../shared/interfaces/core-models/i-user";
import {FormsModule} from "@angular/forms";
import {ERankingOptions} from "../../../../../shared/enums/e-ranking-options";
import {RankingsApiService} from "../../../../../services/rankings-api/rankings-api.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-rankings-page',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule
  ],
  templateUrl: './rankings-page.component.html',
  styleUrl: './rankings-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RankingsPageComponent implements OnInit {

  private destroyRef = inject(DestroyRef)
  private userRoles = EUserRoles

  public rankingOptions = ERankingOptions
  public rankingOption: ERankingOptions = ERankingOptions.VISITS

  public users: IUser[] = []

  constructor(
    private cdRef: ChangeDetectorRef,
    private rankingsAPI: RankingsApiService
  ) {
  }

  ngOnInit() {
    this.getRankedUsers()
  }

  public onSelectOptionPick(value: ERankingOptions): void {
    this.rankingOption = value
    this.getRankedUsers()
  }

  private getRankedUsers(): void {
    this.rankingsAPI.getRankedUsers(this.rankingOption)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(users => {
        this.users = users
        this.cdRef.detectChanges()
      })

  }

  public get columnTitle(): string {
    return this.rankingOption === this.rankingOptions.VISITS ? 'Visits count' : 'Achievements count'
  }

}
