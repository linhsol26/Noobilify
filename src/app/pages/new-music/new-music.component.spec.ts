import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMusicComponent } from './new-music.component';

describe('NewMusicComponent', () => {
  let component: NewMusicComponent;
  let fixture: ComponentFixture<NewMusicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMusicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
