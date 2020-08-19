import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdmlayoutComponent } from './tdmlayout.component';

describe('TdmlayoutComponent', () => {
  let component: TdmlayoutComponent;
  let fixture: ComponentFixture<TdmlayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdmlayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdmlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
