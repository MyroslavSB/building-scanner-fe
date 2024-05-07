import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {BaseIconComponent} from "../base-icon/base-icon.component";
import {baseIcon} from "../../../../base-icons/base-icons";

@Component({
  selector: 'app-sb-input',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    BaseIconComponent
  ],
  templateUrl: './sb-input.component.html',
  styleUrl: './sb-input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SbInputComponent {
  @Input({required: true}) control: FormControl

  @Input() disabledInput: boolean = false
  @Input() placeholder: string = ''
  @Input() controlName: string = ''
  @Input() isPassword: boolean = false

  @Output() onEnterPressed: EventEmitter<void> = new EventEmitter<void>()

  private typePassword: 'text' | 'password' = 'text'

  constructor(
    private cdRef: ChangeDetectorRef
  ) {

  }

  public onEnterPress(): void {
    this.onEnterPressed.emit()
  }

  public get inputType(): string {
    return this.typePassword
  }

  public changeInputType(): void {
    this.typePassword = this.typePassword === 'password' ? 'text' : 'password'
    this.cdRef.detectChanges()
  }

  public get rightIcon(): baseIcon {
    return this.typePassword === 'password' ? 'closed_eye' : 'opened_eye'
  }
}
