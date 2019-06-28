import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import {
  MatCardModule,
  MatInputModule,
  MatProgressSpinnerModule,
} from '@angular/material';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { FindBookPageActions } from '../actions';
import {
  BookAuthorsComponent,
  BookPreviewComponent,
  BookPreviewListComponent,
  BookSearchComponent,
} from '../components';
import { FindBookPageComponent } from '../containers';
import * as fromBooks from '../reducers';
import { PipesModule } from '@test-workspace/shared';


describe('Find Book Page', () => {
  let fixture: ComponentFixture<FindBookPageComponent>;
  let store: MockStore<fromBooks.State>;
  let instance: FindBookPageComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        RouterTestingModule,
        MatInputModule,
        MatCardModule,
        MatProgressSpinnerModule,
        ReactiveFormsModule,
        PipesModule
      ],
      declarations: [
        FindBookPageComponent,
        BookSearchComponent,
        BookPreviewComponent,
        BookPreviewListComponent,
        BookAuthorsComponent,
      ],
      providers: [
        provideMockStore({
          selectors: [
            { selector: fromBooks.getSearchQuery, value: '' },
            { selector: fromBooks.getSearchResults, value: [] },
            { selector: fromBooks.getSearchLoading, value: false },
            { selector: fromBooks.getSearchError, value: '' },
          ],
        }),
      ],
    });

    fixture = TestBed.createComponent(FindBookPageComponent);
    instance = fixture.componentInstance;
    store = TestBed.get(Store);

    spyOn(store, 'dispatch');
  });

  it('should compile', () => {
    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });

  it('should dispatch a book.Search action on search', () => {
    const $event = 'book name';
    const action = FindBookPageActions.searchBooks({ query: $event });

    instance.search($event);

    expect(store.dispatch).toHaveBeenCalledWith(action);
  });
});
