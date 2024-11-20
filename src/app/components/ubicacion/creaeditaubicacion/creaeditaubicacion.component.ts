declare var google: any;
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Distrito } from '../../../models/Distrito';
import { Ubicacion } from '../../../models/Ubicacion';
import { DistritoService } from '../../../services/distrito.service';
import { UbicacionService } from '../../../services/ubicacion.service';
import { Router, RouterModule } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-creaeditaubicacion',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatFormFieldModule,MatInputModule,MatDatepickerModule,MatSelectModule,MatButtonModule,ReactiveFormsModule,RouterModule],
  templateUrl: './creaeditaubicacion.component.html',
  styleUrl: './creaeditaubicacion.component.css'
})

export class CreaeditaubicacionComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  listaDistrito: Distrito[] = [];
  ubi: Ubicacion = new Ubicacion();
  isFetchingLocation: boolean = false;

  map: any; // Referencia al mapa
  marker: any; // Referencia al marcador

  constructor(
    private formBuilder: FormBuilder,
    private diS: DistritoService,
    private uS: UbicacionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      hlongitud: ['', Validators.required],
      hlatitud: ['', Validators.required],
      hfecha: ['', Validators.required],
      hdistrito: ['', Validators.required],
    });
    this.diS.list().subscribe((data) => {
      this.listaDistrito = data;
    });
    this.initMap();
  }

  initMap(): void {
    const initialCoords = { lat: -12.0464, lng: -77.0428 }; // Coordenadas iniciales (Lima, Perú como ejemplo)

    // Configuración del mapa
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: initialCoords,
      zoom: 12,
    });

    // Configuración del marcador
    this.marker = new google.maps.Marker({
      position: initialCoords,
      map: this.map,
      draggable: true, // Permitir que el marcador sea arrastrable
    });

    // Sincronizar el formulario al mover el marcador
    this.marker.addListener('dragend', (event: any) => {
      const lat = event.latLng.lat();
      const lng = event.latLng.lng();
      this.form.patchValue({
        hlatitud: lat,
        hlongitud: lng,
      });
    });

    // Sincronizar el mapa al cambiar los valores del formulario
    this.form.valueChanges.subscribe((formValue) => {
      const lat = parseFloat(formValue.hlatitud);
      const lng = parseFloat(formValue.hlongitud);
      if (!isNaN(lat) && !isNaN(lng)) {
        const newCoords = { lat, lng };
        this.map.setCenter(newCoords);
        this.marker.setPosition(newCoords);
      }
    });
  }

  getCurrentLocation(): void {
    if (navigator.geolocation) {
      this.isFetchingLocation = true;
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.form.patchValue({
            hlongitud: position.coords.longitude,
            hlatitud: position.coords.latitude,
          });
          this.isFetchingLocation = false;
        },
        (error) => {
          console.error('Error al obtener la ubicación:', error);
          this.isFetchingLocation = false;
        }
      );
    } else {
      alert('El navegador no soporta geolocalización.');
    }
  }

  aceptar(): void {
    if (this.form.valid) {
      this.ubi.longitud = this.form.value.hlongitud;
      this.ubi.latitud = this.form.value.hlatitud;
      this.ubi.fechaUbicacion = this.form.value.hfecha;
      this.ubi.distrito.idDistrito = this.form.value.hdistrito;

      this.uS.insert(this.ubi).subscribe((data) => {
        this.uS.list().subscribe((data) => {
          this.uS.setList(data);
        });
      });
      this.router.navigate(['ubicaciones']);
    }
  }
}
