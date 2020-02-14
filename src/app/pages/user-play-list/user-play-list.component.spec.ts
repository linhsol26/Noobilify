import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPlayListComponent } from './user-play-list.component';

describe('UserPlayListComponent', () => {
  let component: UserPlayListComponent;
  let fixture: ComponentFixture<UserPlayListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPlayListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPlayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
