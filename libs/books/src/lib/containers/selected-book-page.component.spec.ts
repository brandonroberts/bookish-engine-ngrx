import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Book, generateMockBook } from '@test-workspace/core';
import { PipesModule } from '@test-workspace/shared';

import { SelectedBookPageActions } from '../actions';
import {
  BookAuthorsComponent,
  BookDetailComponent,
} from '../components';
import { SelectedBookPageComponent } from '../containers';
import * as fromBooks from '../reducers';

describe('Selected Book Page', () => {
  let fixture: ComponentFixture<SelectedBookPageComponent>;
  let store: MockStore<fromBooks.State>;
  let instance: SelectedBookPageComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, MatCardModule, PipesModule],
      declarations: [
        SelectedBookPageComponent,
        BookDetailComponent,
        BookAuthorsComponent,
      ],
      providers: [provideMockStore()],
    });

    fixture = TestBed.createComponent(SelectedBookPageComponent);
    instance = fixture.componentInstance;
    store = TestBed.get(Store);

    spyOn(store, 'dispatch');
  });

  it('should compile', () => {
    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });

  it('should dispatch a collection.AddBook action when addToCollection is called', () => {
    const $event: Book = generateMockBook();
    const action = SelectedBookPageActions.addBook({ book: $event });

    instance.addToCollection($event);

    expect(store.dispatch).toHaveBeenLastCalledWith(action);
  });

  it('should dispatch a collection.RemoveBook action on removeFromCollection', () => {
    const $event: Book = generateMockBook();
    const action = SelectedBookPageActions.removeBook({ book: $event });

    instance.removeFromCollection($event);

    expect(store.dispatch).toHaveBeenLastCalledWith(action);
  });
});
