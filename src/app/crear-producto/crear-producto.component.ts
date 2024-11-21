import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ProductosService } from '../servicios/productos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-producto',
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule, MatButtonModule],
  templateUrl: './crear-producto.component.html',
  styleUrl: './crear-producto.component.css'
})
export class CrearProductoComponent {
  productoForm!: FormGroup;

  constructor(private fb: FormBuilder, private productosService: ProductosService) {
    this.productoForm = this.fb.group({
      titulo: ['', Validators.required],
      descripcion: [''],
      precio: ['', Validators.required],
      categoria: ['', Validators.required]
    })
  }

  crearProducto() {
    if (this.productoForm.invalid) {
      return
    }

    this.productosService.insertarProducto(this.productoForm.value).subscribe({
      next: (data: any) => {
        Swal.fire({
          icon: 'success',
          title: 'Operación exitosa',
          text: 'Producto creado exitosamente'
        })
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
