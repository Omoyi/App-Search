import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtizersPortraitComponent } from './utizers-portrait.component';

describe('UtizersPortraitComponent', () => {
  let component: UtizersPortraitComponent;
  let fixture: ComponentFixture<UtizersPortraitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtizersPortraitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtizersPortraitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
