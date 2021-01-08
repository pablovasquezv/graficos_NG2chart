import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { NavMenuItem } from 'src/app/models/nav';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  //Creacion de menu
  menu = [
    { Label: 'Usuarios', Target: '/usuarios' },
   { Label: 'Paises', Target: '/Paises' },
    { Label: 'Dashboard', Target: '/dashboard' },
    { Label: 'Registro Insulina', Target: '/registro' }
  ] as NavMenuItem[];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) { }

}
