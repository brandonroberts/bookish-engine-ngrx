import {
  createSelector,
  createFeatureSelector,
  Action,
  combineReducers,
} from '@ngrx/store';
import { CoreState } from '@test-workspace/core';
import * as fromAuth from '../reducers/auth.reducer';
import * as fromLoginPage from '../reducers/login-page.reducer';

export interface UserAuthState {
  status: fromAuth.State;
  loginPage: fromLoginPage.State;
}

export interface AuthState extends CoreState {
  auth: UserAuthState;
}

export function reducers(state: UserAuthState | undefined, action: Action) {
  return combineReducers({
    status: fromAuth.reducer,
    loginPage: fromLoginPage.reducer,
  })(state, action);
}

export const selectAuthState = createFeatureSelector<AuthState, UserAuthState>('auth');

export const selectAuthStatusState = createSelector(
  selectAuthState,
  (state: UserAuthState) => state.status
);
export const getUser = createSelector(selectAuthStatusState, fromAuth.getUser);
export const getLoggedIn = createSelector(getUser, user => !!user);

export const selectLoginPageState = createSelector(
  selectAuthState,
  (state: UserAuthState) => state.loginPage
);
export const getLoginPageError = createSelector(
  selectLoginPageState,
  fromLoginPage.getError
);
export const getLoginPagePending = createSelector(
  selectLoginPageState,
  fromLoginPage.getPending
);
