import { createAction, props } from '@ngrx/store';

import { Book } from '@test-workspace/core';

export const loadBook = createAction(
  '[Book Exists Guard] Load Book',
  props<{ book: Book }>()
);
