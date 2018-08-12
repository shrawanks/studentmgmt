import { COMMA, ENTER } from '@angular/cdk/keycodes'
import { Component } from '@angular/core'
import { MatChipInputEvent } from '@angular/material'
import { DomSanitizer } from '@angular/platform-browser'
import { MatIconRegistry } from '@angular/material'

export interface Fruit {
  name: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'thumbs-up',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/thumbup-icon.svg'))
  }
  title = 'frontend'

  visible = true
  selectable = true
  removable = true
  addOnBlur = true
  readonly separatorKeysCodes: number[] = [ENTER, COMMA]
  fruits: Fruit[] = [
    { name: 'Lemon' },
    { name: 'Lime' },
    { name: 'Apple' },
  ]

  add(event: MatChipInputEvent): void {
    const input = event.input
    const value = event.value

    // Add our fruit
    if ((value || '').trim()) {
      this.fruits.push({ name: value.trim() })
    }

    // Reset the input value
    if (input) {
      input.value = ''
    }
  }

  remove(fruit: Fruit): void {
    const index = this.fruits.indexOf(fruit)

    if (index >= 0) {
      this.fruits.splice(index, 1)
    }
  }
}
