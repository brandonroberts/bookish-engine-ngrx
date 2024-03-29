import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { TestBed } from '@angular/core/testing';

import { of } from 'rxjs';

import { RouterEffects } from '../effects';

describe('RouterEffects', () => {
  let effects: RouterEffects;
  let titleService: Title;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RouterEffects,
        {
          provide: Router,
          useValue: { events: of(new NavigationEnd(1, '', '')) },
        },
        {
          provide: ActivatedRoute,
          useValue: { data: of({ title: 'Search' }) },
        },
        { provide: Title, useValue: { setTitle: jest.fn() } },
      ],
    });

    effects = TestBed.get(RouterEffects);
    titleService = TestBed.get(Title);
  });

  describe('updateTitle$', () => {
    it('should update the title on router navigation', () => {
      effects.updateTitle$.subscribe();
      expect(titleService.setTitle).toHaveBeenCalledWith(
        'Book Collection - Search'
      );
    });
  });
});
