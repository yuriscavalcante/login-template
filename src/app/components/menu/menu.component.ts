import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  public items: MenuItem[] = [];
  constructor() {}
  ngOnInit() {
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home', style: 'menucus'},
      { label: 'Calendar', icon: 'pi pi-fw pi-calendar', styleClass: 'menucus' },
      { label: 'Edit', icon: 'pi pi-fw pi-pencil', styleClass: 'menucus' },
      { label: 'Documentation', icon: 'pi pi-fw pi-file', styleClass: 'menucus' },
      { label: 'Settings', icon: 'pi pi-fw pi-cog', styleClass: 'menucus' },
    ];
  }
}
