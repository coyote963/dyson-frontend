import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdmpreviewComponent } from './tdmpreview.component';

describe('TdmpreviewComponent', () => {
  let component: TdmpreviewComponent;
  let fixture: ComponentFixture<TdmpreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdmpreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdmpreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
