import { Component } from '@angular/core';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {RouterLink} from "@angular/router";

const MATERIAL_MODULES = [
  MatToolbarModule,
  MatIconModule
];

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MATERIAL_MODULES, MatButtonModule, RouterLink],
  template: `
    <mat-toolbar color="primary">
      <a mat-button routerLink="/">
        <mat-icon>home</mat-icon>
        <span>Home</span>
      </a>

      <span class="spacer"></span>

      <a mat-button routerLink="/contacts">
        <mat-icon>list_alt</mat-icon>
        <span>Contacts</span>
      </a>

      <span class="spacer"></span>

      <a mat-button >
        <mat-icon>add_box</mat-icon>
        <span>New</span>
      </a>
    </mat-toolbar>
  `,
  styles: ``
})
export class ToolbarComponent {

}
