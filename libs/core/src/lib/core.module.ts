import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';

import { MaterialModule } from './material';
import {
  LayoutComponent,
  NavItemComponent,
  SidenavComponent,
  ToolbarComponent,
} from './components';
import {
  NotFoundPageComponent,
} from './containers';
import { RouterEffects, UserEffects } from './effects';

export const COMPONENTS = [
  NotFoundPageComponent,
  LayoutComponent,
  NavItemComponent,
  SidenavComponent,
  ToolbarComponent,
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    EffectsModule.forFeature([
      RouterEffects,
      UserEffects
    ])
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class CoreModule {}
