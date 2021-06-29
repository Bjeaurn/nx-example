import { Component } from '@angular/core'
import { libA } from '@circ-dep-test/lib-a'

@Component({
  selector: 'circ-dep-test-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = libA();
}
