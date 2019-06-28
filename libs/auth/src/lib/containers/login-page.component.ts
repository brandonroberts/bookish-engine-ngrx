import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Credentials } from '../models';
import * as fromAuth from '../reducers';
import { LoginPageActions } from '../actions';

@Component({
  selector: 'bc-login-page',
  template: `
    <bc-login-form
      (submitted)="onSubmit($event)"
      [pending]="pending$ | async"
      [errorMessage]="error$ | async"
    >
    </bc-login-form>
  `,
  styles: [],
})
export class LoginPageComponent implements OnInit {
  pending$ = this.store.pipe(select(fromAuth.getLoginPagePending));
  error$ = this.store.pipe(select(fromAuth.getLoginPageError));

  constructor(private store: Store<fromAuth.AuthState>) {}

  ngOnInit() {}

  onSubmit(credentials: Credentials) {
    this.store.dispatch(LoginPageActions.login({ credentials }));
  }
}
