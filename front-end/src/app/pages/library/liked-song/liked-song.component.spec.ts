import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikedSongComponent } from './liked-song.component';

describe('LikedSongComponent', () => {
  let component: LikedSongComponent;
  let fixture: ComponentFixture<LikedSongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikedSongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikedSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
