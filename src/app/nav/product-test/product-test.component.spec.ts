import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTestComponent } from './product-test.component';

describe('ProductTestComponent', () => {
  let component: ProductTestComponent;
  let fixture: ComponentFixture<ProductTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductTestComponent]
    });
    fixture = TestBed.createComponent(ProductTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
