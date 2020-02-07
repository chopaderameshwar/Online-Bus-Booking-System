import { async, TestBed } from '@angular/core/testing';
import { PilgrimagePackageComponent } from './pilgrimage-package.component';
describe('PilgrimagePackageComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PilgrimagePackageComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(PilgrimagePackageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=pilgrimage-package.component.spec.js.map