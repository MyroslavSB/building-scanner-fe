import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {IBuilding} from "../../../../../shared/interfaces/core-models/i-building";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {SbButtonComponent} from "../../../../../shared/components/sb-button/sb-button.component";
import {BuildingsApiService} from "../../../../../services/buildings-api/buildings-api.service";
import {Router} from "@angular/router";

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
  styleUrl: './buildings-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BuildingsPageComponent implements OnInit {
  public buildings: IBuilding[] = []

  constructor(
    private buildingsAPI: BuildingsApiService,
    private cdRef: ChangeDetectorRef,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.getBuildings()
  }

  private getBuildings(): void {
    this.buildingsAPI
      .getBuildings()
      .subscribe(buildings => {
        this.buildings = buildings
        this.cdRef.detectChanges()
      })
  }

  public goToBuildingPage(building: IBuilding): void {
    this.router.navigate([`/buildings/${building.id}`])
  }
}
