import { Component } from '@angular/core';

import { PoMenuItem } from '@portinari/portinari-ui';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  readonly menus: Array<PoMenuItem> = [
    {
      label: 'Clientes',
      link: 'app/customers',
      icon: 'po-icon-users',
      shortLabel: 'Clientes'
    }
  ];

}
