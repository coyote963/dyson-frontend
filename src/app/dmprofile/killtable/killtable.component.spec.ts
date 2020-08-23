import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KilltableComponent } from './killtable.component';

describe('KilltableComponent', () => {
  let component: KilltableComponent;
  let fixture: ComponentFixture<KilltableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KilltableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KilltableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
