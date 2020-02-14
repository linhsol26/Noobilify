import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayListTopHitComponent } from './play-list-top-hit.component';

describe('PlayListTopHitComponent', () => {
  let component: PlayListTopHitComponent;
  let fixture: ComponentFixture<PlayListTopHitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayListTopHitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayListTopHitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
