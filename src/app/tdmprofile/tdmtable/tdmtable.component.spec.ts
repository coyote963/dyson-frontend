import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdmtableComponent } from './tdmtable.component';

describe('TdmtableComponent', () => {
  let component: TdmtableComponent;
  let fixture: ComponentFixture<TdmtableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdmtableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdmtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
