import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  JhipsterFileuploadTestApplicationSharedLibsModule,
  JhipsterFileuploadTestApplicationSharedCommonModule,
  JhiLoginModalComponent,
  HasAnyAuthorityDirective
} from './';

@NgModule({
  imports: [JhipsterFileuploadTestApplicationSharedLibsModule, JhipsterFileuploadTestApplicationSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [JhipsterFileuploadTestApplicationSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterFileuploadTestApplicationSharedModule {
  static forRoot() {
    return {
      ngModule: JhipsterFileuploadTestApplicationSharedModule
    };
  }
}
