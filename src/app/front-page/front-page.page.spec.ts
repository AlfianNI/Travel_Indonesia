import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FrontPagePage } from './front-page.page';

describe('FrontPagePage', () => {
  let component: FrontPagePage;
  let fixture: ComponentFixture<FrontPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FrontPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
