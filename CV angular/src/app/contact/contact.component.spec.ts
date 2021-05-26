import { TestBed } from '@angular/core/testing';
import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ContactComponent
      ],
    }).compileComponents();
  });

  it('should create ', () => {
    const fixture = TestBed.createComponent(ContactComponent);
    const contact = fixture.componentInstance;
    expect(contact).toBeTruthy();
  });

 })