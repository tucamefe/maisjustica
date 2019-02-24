import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhamentoProcessoComponent } from './detalhamento-processo.component';

describe('DetalhamentoProcessoComponent', () => {
  let component: DetalhamentoProcessoComponent;
  let fixture: ComponentFixture<DetalhamentoProcessoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhamentoProcessoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhamentoProcessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
