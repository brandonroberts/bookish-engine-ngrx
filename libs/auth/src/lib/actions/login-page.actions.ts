import { createAction, props } from '@ngrx/store';
import { Credentials } from '../models';

export const login = createAction(
  '[Login Page] Login',
  props<{ credentials: Credentials }>()
);
