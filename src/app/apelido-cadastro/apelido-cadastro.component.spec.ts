import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApelidoCadastroComponent } from './apelido-cadastro.component';

describe('ApelidoCadastroComponent', () => {
  let component: ApelidoCadastroComponent;
  let fixture: ComponentFixture<ApelidoCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApelidoCadastroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApelidoCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
