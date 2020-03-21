import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DmpreviewComponent } from './dmpreview.component';

describe('DmpreviewComponent', () => {
  let component: DmpreviewComponent;
  let fixture: ComponentFixture<DmpreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DmpreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DmpreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
