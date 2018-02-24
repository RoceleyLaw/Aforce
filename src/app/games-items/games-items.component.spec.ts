import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesItemsComponent } from './games-items.component';

describe('GamesItemsComponent', () => {
  let component: GamesItemsComponent;
  let fixture: ComponentFixture<GamesItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamesItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
