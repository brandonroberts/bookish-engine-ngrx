import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { BooksRoutingModule } from './books-routing.module';
import {
  BookAuthorsComponent,
  BookDetailComponent,
  BookPreviewComponent,
  BookPreviewListComponent,
  BookSearchComponent,
} from './components';
import {
  CollectionPageComponent,
  FindBookPageComponent,
  SelectedBookPageComponent,
  ViewBookPageComponent,
} from './containers';
import { BookEffects, CollectionEffects } from './effects';

import { reducers } from './reducers';

import { SharedModule, PipesModule } from '@test-workspace/shared';

export const COMPONENTS = [
  BookAuthorsComponent,
  BookDetailComponent,
  BookPreviewComponent,
  BookPreviewListComponent,
  BookSearchComponent,
];

export const CONTAINERS = [
  FindBookPageComponent,
  ViewBookPageComponent,
  SelectedBookPageComponent,
  CollectionPageComponent,
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    BooksRoutingModule,

    /**
     * StoreModule.forFeature is used for composing state
     * from feature modules. These modules can be loaded
     * eagerly or lazily and will be dynamically added to
     * the existing state.
     */
    StoreModule.forFeature('books', reducers),

    /**
     * Effects.forFeature is used to register effects
     * from feature modules. Effects can be loaded
     * eagerly or lazily and will be started immediately.
     *
     * All Effects will only be instantiated once regardless of
     * whether they are registered once or multiple times.
     */
    EffectsModule.forFeature([BookEffects, CollectionEffects]),
    PipesModule,
  ],
  declarations: [COMPONENTS, CONTAINERS],
})
export class BooksModule {}
