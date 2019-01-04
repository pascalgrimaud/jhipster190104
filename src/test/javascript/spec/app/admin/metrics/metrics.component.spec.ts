import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { of, throwError } from 'rxjs';

import { JhipsterSampleApplicationTestModule } from '../../../test.module';
import { MyPrefixMetricsMonitoringComponent } from 'app/admin/metrics/metrics.component';
import { MyPrefixMetricsService } from 'app/admin/metrics/metrics.service';

describe('Component Tests', () => {
    describe('MyPrefixMetricsMonitoringComponent', () => {
        let comp: MyPrefixMetricsMonitoringComponent;
        let fixture: ComponentFixture<MyPrefixMetricsMonitoringComponent>;
        let service: MyPrefixMetricsService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [JhipsterSampleApplicationTestModule],
                declarations: [MyPrefixMetricsMonitoringComponent]
            })
                .overrideTemplate(MyPrefixMetricsMonitoringComponent, '')
                .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(MyPrefixMetricsMonitoringComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(MyPrefixMetricsService);
        });

        describe('refresh', () => {
            it('should call refresh on init', () => {
                // GIVEN
                const response = {
                    timers: {
                        service: 'test',
                        unrelatedKey: 'test'
                    },
                    gauges: {
                        'jcache.statistics': {
                            value: 2
                        },
                        unrelatedKey: 'test'
                    }
                };
                spyOn(service, 'getMetrics').and.returnValue(of(response));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.getMetrics).toHaveBeenCalled();
            });
        });
    });
});
