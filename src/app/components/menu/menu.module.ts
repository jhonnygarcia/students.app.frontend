import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { MenuComponent } from "./menu.component";

@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [MenuComponent],
})
export class MenuModule{}