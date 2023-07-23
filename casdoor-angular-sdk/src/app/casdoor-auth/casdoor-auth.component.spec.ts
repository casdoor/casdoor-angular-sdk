import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasdoorAuthComponent } from './casdoor-auth.component';

describe('CasdoorAuthComponent', () => {
  let component: CasdoorAuthComponent;
  let fixture: ComponentFixture<CasdoorAuthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CasdoorAuthComponent]
    });
    fixture = TestBed.createComponent(CasdoorAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
