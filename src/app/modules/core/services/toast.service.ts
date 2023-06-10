import { Injectable } from '@angular/core';
import { ActiveToast, IndividualConfig, ToastrService } from 'ngx-toastr';
import { Observable, from } from 'rxjs';

@Injectable()
export class ToasterService {

  constructor(private toastrService: ToastrService) {
  }

  private toastr<T>({ title, text, type, options}: {
    title: string,
    text: string,
    type: 'success'|'error'|'warning'|'info',
    options?:Partial<IndividualConfig<any>>
  }): ActiveToast<any> | undefined {
    debugger
    if(!this.toastrService[type]) return
    return this.toastrService[type](text,title, options)
  }

  success(title:string, msg:string, options?: Partial<IndividualConfig<any>>) : ActiveToast<any> | undefined{
    return this.toastr({ title, text:msg, type: 'success', options })
  }
  error(title:string, msg:string, options?: Partial<IndividualConfig<any>>) : ActiveToast<any> | undefined{
    return this.toastr({ title, text:msg, type: 'error', options })
  }
  warning(title:string, msg:string, options?: Partial<IndividualConfig<any>>) : ActiveToast<any> | undefined{
    return this.toastr({ title, text:msg, type: 'warning', options })
  }
  info(title:string, msg:string, options?: Partial<IndividualConfig<any>>) : ActiveToast<any> | undefined{
    return this.toastr({ title, text:msg, type: 'info', options })
  }
}
