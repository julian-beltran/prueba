import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { LibrosService } from './../_services/libros.service';
import { detalle } from './../_model/detalle';

@Component({
  selector: 'app-detalle-libro',
  templateUrl: './detalle-libro.component.html',
  styleUrls: ['./detalle-libro.component.css']
})

export class DetalleLibroComponent implements OnInit {

  displayedDetalleColumns: string[] = ['userId','id','title','body'];
  dataSourceDetalle = new MatTableDataSource<detalle>();

 
  constructor(private detalleService: LibrosService,
    private router: Router,
    public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) =>{
      let id = params['id'];

      this.detalleService.listarDetalle(id).subscribe(data =>{
        this.dataSourceDetalle = new MatTableDataSource(data);
      });

  });
  }

}
