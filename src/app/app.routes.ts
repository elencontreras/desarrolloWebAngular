import { Routes } from '@angular/router';
import { ListadoProductosComponent } from './listado-productos/listado-productos.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { authGuard } from './guards/auth.guard';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'listado',
        component: ListadoProductosComponent
      },
      {
        path: 'detalle/:id',
        component: DetalleProductoComponent
      },

      {
        path: 'crear-producto',
        component: CrearProductoComponent
      }


    ]
  },


  {
    path: 'login',
    component: LoginComponent
  }
];
