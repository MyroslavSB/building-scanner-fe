import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {baseIcon} from "../../../../base-icons/base-icons";
import {BaseIconComponent} from "../base-icon/base-icon.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-sb-button',
  standalone: true,
  imports: [
    BaseIconComponent,
    NgIf
  ],
  templateUrl: './sb-button.component.html',
  styleUrl: './sb-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SbButtonComponent {

  @Input() leftIcon: baseIcon
  @Input() rightIcon: baseIcon
  @Input() buttonText: string = ''

  @Output() buttonClicked: EventEmitter<void> = new EventEmitter<void>()

  public onButtonClicked(): void {
    this.buttonClicked.emit()
  }
}

