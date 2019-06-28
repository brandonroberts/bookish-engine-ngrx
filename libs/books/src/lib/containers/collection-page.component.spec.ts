import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { MatCardModule, MatInputModule } from '@angular/material';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { PipesModule } from '@test-workspace/shared';

import { CollectionPageActions } from '../actions';
import {
  BookAuthorsComponent,
  BookPreviewComponent,
  BookPreviewListComponent,
} from '../components';
import { CollectionPageComponent } from '../containers';
import * as fromBooks from '../reducers';

describe('Collection Page', () => {
  let fixture: ComponentFixture<CollectionPageComponent>;
  let store: MockStore<fromBooks.State>;
  let instance: CollectionPageComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        MatCardModule,
        MatInputModule,
        RouterTestingModule,
        PipesModule
      ],
      declarations: [
        CollectionPageComponent,
        BookPreviewListComponent,
        BookPreviewComponent,
        BookAuthorsComponent,
      ],
      providers: [
        provideMockStore({
          selectors: [{ selector: fromBooks.getBookCollection, value: [] }],
        }),
      ],
    });

    fixture = TestBed.createComponent(CollectionPageComponent);
    instance = fixture.componentInstance;
    store = TestBed.get(Store);

    spyOn(store, 'dispatch');
  });

  it('should compile', () => {
    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });

  it('should dispatch a collection.Load on init', () => {
    const action = CollectionPageActions.loadCollection();

    fixture.detectChanges();

    expect(store.dispatch).toHaveBeenCalledWith(action);
  });
});
