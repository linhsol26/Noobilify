import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongTopHitComponent } from './song-top-hit.component';

describe('SongTopHitComponent', () => {
  let component: SongTopHitComponent;
  let fixture: ComponentFixture<SongTopHitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongTopHitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongTopHitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
