import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KillhistoryComponent } from './killhistory.component';

describe('KillhistoryComponent', () => {
  let component: KillhistoryComponent;
  let fixture: ComponentFixture<KillhistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KillhistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KillhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
