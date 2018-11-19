import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescFilmComponent } from './desc-film.component';

describe('DescFilmComponent', () => {
  let component: DescFilmComponent;
  let fixture: ComponentFixture<DescFilmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescFilmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
