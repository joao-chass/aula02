import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAniamisComponent } from './lista-aniamis.component';

describe('ListaAniamisComponent', () => {
  let component: ListaAniamisComponent;
  let fixture: ComponentFixture<ListaAniamisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaAniamisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAniamisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
