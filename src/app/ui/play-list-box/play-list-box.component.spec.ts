import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayListBoxComponent } from './play-list-box.component';

describe('PlayListBoxComponent', () => {
  let component: PlayListBoxComponent;
  let fixture: ComponentFixture<PlayListBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayListBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayListBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
