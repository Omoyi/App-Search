import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheUserComponent } from './the-user.component';

describe('TheUserComponent', () => {
  let component: TheUserComponent;
  let fixture: ComponentFixture<TheUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
