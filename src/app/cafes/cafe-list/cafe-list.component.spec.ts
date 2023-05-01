/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CafeListComponent } from './cafe-list.component';
import { HttpClientModule } from '@angular/common/http';
import { Cafe } from '../cafe';
import { faker } from '@faker-js/faker';

describe('CafeListComponent', () => {
  let component: CafeListComponent;
  let fixture: ComponentFixture<CafeListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CafeListComponent ],
      imports: [HttpClientModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CafeListComponent);
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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it("Component has a table", () => {
    fixture.detectChanges();
     expect(fixture.debugElement.query(By.css("tbody")).childNodes.length).toBeGreaterThan(0);
   });

   it('should have thead element on table', () => {
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('thead')).childNodes.length).toBeGreaterThan(0);
  });

  it('should have dd element ', () => {
    fixture.detectChanges();
    const dd = fixture.debugElement.query(By.css('dd'));
    const content: HTMLElement = dd.nativeElement;
    expect(content.textContent).toEqual(String(component.cafes[0].id))
  });
});
