import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessovazioComponent } from './processovazio.component';

describe('ProcessovazioComponent', () => {
  let component: ProcessovazioComponent;
  let fixture: ComponentFixture<ProcessovazioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessovazioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessovazioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
