import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToasterService } from './services/toast.service';
import { ToastrModule } from 'ngx-toastr';
import { IConfig, provideEnvironmentNgxMask } from 'ngx-mask';

const maskConfigFunction: () => Partial<IConfig> = () => {
  return {
    // validation: true,
  };
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ToastrModule.forRoot(),
  ],
  providers:[
    provideEnvironmentNgxMask(maskConfigFunction),
    ToasterService
  ]
})
export class CoreModule { }
