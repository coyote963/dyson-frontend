import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CtflayoutComponent } from './ctflayout.component';

describe('CtflayoutComponent', () => {
  let component: CtflayoutComponent;
  let fixture: ComponentFixture<CtflayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtflayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtflayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
