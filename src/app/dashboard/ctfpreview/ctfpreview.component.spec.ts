import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CtfpreviewComponent } from './ctfpreview.component';

describe('CtfpreviewComponent', () => {
  let component: CtfpreviewComponent;
  let fixture: ComponentFixture<CtfpreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtfpreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtfpreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
