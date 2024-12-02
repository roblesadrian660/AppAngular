import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {

  public sidebarItems = [
    { label: 'Listado', icon: 'label', url: './list', id:'nav-bar__btn-list-user' },
    { label: 'Añadir', icon: 'add', url: './create', id:'nav-bar__btn-create-user' }
  ];

  constructor(
    private readonly router: Router,
  ) {
  }

  ngOnInit(): void {
  }

  public redirectUsers(): void {
    this.router.navigateByUrl('/users/list');
  }

  /**
   * Este método no se puede modificar
   * */
  public logout(): void {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }
}
