import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlossarioComponent } from './glossario.component';

describe('GlossarioComponent', () => {
  let component: GlossarioComponent;
  let fixture: ComponentFixture<GlossarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlossarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlossarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
