import { createAction, props } from '@ngrx/store';

import { Book } from '@test-workspace/books/models';

export const loadBook = createAction(
  '[Book Exists Guard] Load Book',
  props<{ book: Book }>()
);
