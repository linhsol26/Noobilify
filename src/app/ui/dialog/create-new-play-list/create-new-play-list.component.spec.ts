import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewPlayListComponent } from './create-new-play-list.component';

describe('CreateNewPlayListComponent', () => {
  let component: CreateNewPlayListComponent;
  let fixture: ComponentFixture<CreateNewPlayListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNewPlayListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewPlayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
