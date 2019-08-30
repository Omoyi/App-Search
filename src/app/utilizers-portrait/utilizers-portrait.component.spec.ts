import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilizersPortraitComponent } from './utilizers-portrait.component';

describe('UtizersPortraitComponent', () => {
  let component: UtilizersPortraitComponent;
  let fixture: ComponentFixture<UtilizersPortraitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtilizersPortraitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilizersPortraitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
