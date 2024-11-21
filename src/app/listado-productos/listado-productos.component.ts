import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../servicios/productos.service';
import { Producto } from '../interfaces/producto';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listado-productos',
  standalone: true,
  imports: [RouterLink, MatIconModule],
  templateUrl: './listado-productos.component.html',
  styleUrl: './listado-productos.component.css'
})
export class ListadoProductosComponent implements OnInit {

  productos: Producto[] = []

  constructor(private readonly productosService: ProductosService) { }


  ngOnInit(): void {
    this.obtenerProductos()
  }


  obtenerProductos() {
    this.productosService.obtenerTodosProductos().subscribe({
      next: (data: Producto[]) => {
        this.productos = data
        console.log(data)
      }
    })
  }

  eliminarProducto(id: number) {
    this.productosService.eliminarProducto(id).subscribe({
      next: (data: any) => {
        Swal.fire({
          icon: 'success',
          title: 'Operación exitosa',
          text: 'Producto eliminado correctamente',
        })
        this.obtenerProductos()
      }, error(err) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: err.error.msj
        })
      }
    })
  }
}
