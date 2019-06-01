import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'region',
        loadChildren: './region/region.module#JhipsterFileuploadTestApplicationRegionModule'
      },
      {
        path: 'country',
        loadChildren: './country/country.module#JhipsterFileuploadTestApplicationCountryModule'
      },
      {
        path: 'location',
        loadChildren: './location/location.module#JhipsterFileuploadTestApplicationLocationModule'
      },
      {
        path: 'department',
        loadChildren: './department/department.module#JhipsterFileuploadTestApplicationDepartmentModule'
      },
      {
        path: 'task',
        loadChildren: './task/task.module#JhipsterFileuploadTestApplicationTaskModule'
      },
      {
        path: 'employee',
        loadChildren: './employee/employee.module#JhipsterFileuploadTestApplicationEmployeeModule'
      },
      {
        path: 'job',
        loadChildren: './job/job.module#JhipsterFileuploadTestApplicationJobModule'
      },
      {
        path: 'job-history',
        loadChildren: './job-history/job-history.module#JhipsterFileuploadTestApplicationJobHistoryModule'
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ],
  declarations: [],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterFileuploadTestApplicationEntityModule {}
