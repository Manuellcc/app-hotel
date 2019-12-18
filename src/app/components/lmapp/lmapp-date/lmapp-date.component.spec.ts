import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LmappDateComponent } from './lmapp-date.component';

describe('LmappDateComponent', () => {
  let component: LmappDateComponent;
  let fixture: ComponentFixture<LmappDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmappDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmappDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
