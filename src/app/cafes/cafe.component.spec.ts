import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { CafeComponent } from './cafe.component';
import { HttpClientModule } from '@angular/common/http';
import { CafeService } from './cafe.service';
import { Cafe } from './cafe';
import { faker } from '@faker-js/faker';
import { By } from '@angular/platform-browser';

describe('CafeComponent', () => {
  let component: CafeComponent;
  let fixture: ComponentFixture<CafeComponent>;
  let debug: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ CafeComponent ], 
      providers: [CafeService],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CafeComponent);
    component = fixture.componentInstance;

    component.cafes = [
      new Cafe(faker.datatype.number(), 
        faker.name.firstName(), 
        faker.name.suffix(),
        faker.name.suffix(),
        faker.helpers.shuffle(['a', 'b', 'c']),
        faker.datatype.number(),
        faker.name.suffix())
    ]
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // it("Component has a table", () => {
  //   expect(debug.query(By.css("tbody")).childNodes.length).toBeGreaterThan(0);
  // });
  // it('should have an dd element ', () => {
  //   const dd = debug.query(By.css('dd'));
  //   const content: HTMLElement = dd.nativeElement;
  //   expect(content.textContent).toEqual(component.cafes[0].name)
  // });
});
