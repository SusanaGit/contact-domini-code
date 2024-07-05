import { Component } from '@angular/core';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";

const MATERIAL_MODULES = [
  MatToolbarModule,
  MatIconModule
];

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MATERIAL_MODULES],
  template: `
    <p>
      toolbar works!
    </p>
  `,
  styles: ``
})
export class ToolbarComponent {

}
