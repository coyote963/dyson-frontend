import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DmtableComponent } from './dmtable.component';

describe('DmtableComponent', () => {
  let component: DmtableComponent;
  let fixture: ComponentFixture<DmtableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DmtableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DmtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
