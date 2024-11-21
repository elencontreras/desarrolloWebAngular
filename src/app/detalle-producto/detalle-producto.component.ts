import { Component, Input, OnInit } from '@angular/core';
import { ProductosService } from '../servicios/productos.service';
import { Producto } from '../interfaces/producto';

@Component({
  selector: 'app-detalle-producto',
  standalone: true,
  imports: [],
  templateUrl: './detalle-producto.component.html',
  styleUrl: './detalle-producto.component.css'
})
export class DetalleProductoComponent implements OnInit {
  @Input() id!: string;
  producto!: Producto;
  constructor(private readonly productosService: ProductosService){}

  ngOnInit(): void {
    this.obtenerProducto();
  }



  obtenerProducto(){
    this.productosService.obtenerProductoPorId(this.id).subscribe({
      next: (data: Producto) =>{
        console.log(data)
        this.producto = data
      }
    })
  }
}
