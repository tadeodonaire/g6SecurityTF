import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Distrito } from '../../../models/Distrito';
import { Ciudad } from '../../../models/Ciudad';
import { CiudadService } from '../../../services/ciudad.service';
import { DistritoService } from '../../../services/distrito.service';
import { Router, RouterModule } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { map, startWith } from 'rxjs';

@Component({
  selector: 'app-creaeditadistrito',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    CommonModule,RouterModule
  ],
  templateUrl: './creaeditadistrito.component.html',
  styleUrls: ['./creaeditadistrito.component.css'], 
})
export class CreaeditadistritoComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  listaCiudades: Ciudad[] = [];
  distri: Distrito = new Distrito();
  distritoSearchControl = new FormControl(''); // Control para el término de búsqueda
  filteredDistritoGroups: DistritoGroups[] = []; // Grupos de distritos filtrados

  distritoGroups: DistritoGroups[] = [
        {
      name: 'Lima',
      disabled: false,
      di: [
        { value: 'Ancón', viewValue: 'Ancón' },
        { value: 'Ate', viewValue: 'Ate' },
        { value: 'Barranco', viewValue: 'Barranco' },
        { value: 'Breña', viewValue: 'Breña' },
        { value: 'Carabayllo', viewValue: 'Carabayllo' },
        { value: 'Cercado de Lima', viewValue: 'Cercado de Lima' },
        { value: 'Chaclacayo', viewValue: 'Chaclacayo' },
        { value: 'Chorrillos', viewValue: 'Chorrillos' },
        { value: 'Cieneguilla', viewValue: 'Cieneguilla' },
        { value: 'Comas', viewValue: 'Comas' },
        { value: 'El Agustino', viewValue: 'El Agustino' },
        { value: 'Independencia', viewValue: 'Independencia' },
        { value: 'Jesús María', viewValue: 'Jesús María' },
        { value: 'La Molina', viewValue: 'La Molina' },
        { value: 'La Victoria', viewValue: 'La Victoria' },
        { value: 'Lince', viewValue: 'Lince' },
        { value: 'Los Olivos', viewValue: 'Los Olivos' },
        { value: 'Lurigancho-Chosica', viewValue: 'Lurigancho-Chosica' },
        { value: 'Lurín', viewValue: 'Lurín' },
        { value: 'Magdalena del Mar', viewValue: 'Magdalena del Mar' },
        { value: 'Miraflores', viewValue: 'Miraflores' },
        { value: 'Pachacámac', viewValue: 'Pachacámac' },
        { value: 'Pucusana', viewValue: 'Pucusana' },
        { value: 'Pueblo Libre', viewValue: 'Pueblo Libre' },
        { value: 'Puente Piedra', viewValue: 'Puente Piedra' },
        { value: 'Punta Hermosa', viewValue: 'Punta Hermosa' },
        { value: 'Punta Negra', viewValue: 'Punta Negra' },
        { value: 'Rímac', viewValue: 'Rímac' },
        { value: 'San Bartolo', viewValue: 'San Bartolo' },
        { value: 'San Borja', viewValue: 'San Borja' },
        { value: 'San Isidro', viewValue: 'San Isidro' },
        {value: 'San Juan de Lurigancho',viewValue: 'San Juan de Lurigancho'},
        {value: 'San Juan de Miraflores', viewValue: 'San Juan de Miraflores'},
        { value: 'San Luis', viewValue: 'San Luis' },
        { value: 'San Martín de Porres', viewValue: 'San Martín de Porres' },
        { value: 'San Miguel', viewValue: 'San Miguel' },
        { value: 'Santa Anita', viewValue: 'Santa Anita' },
        { value: 'Santa María del Mar', viewValue: 'Santa María del Mar' },
        { value: 'Santa Rosa', viewValue: 'Santa Rosa' },
        { value: 'Santiago de Surco', viewValue: 'Santiago de Surco' },
        { value: 'Surquillo', viewValue: 'Surquillo' },
        { value: 'Villa El Salvador', viewValue: 'Villa El Salvador' },
        {value: 'Villa María del Triunfo', viewValue: 'Villa María del Triunfo'},
      ],
    },
    {
      name: 'Arequipa',
      disabled: false,
      di: [
        { value: 'Alto Selva Alegre', viewValue: 'Alto Selva Alegre' },
        { value: 'Arequipa', viewValue: 'Arequipa' },
        { value: 'Cayma', viewValue: 'Cayma' },
        { value: 'Cerro Colorado', viewValue: 'Cerro Colorado' },
        { value: 'Characato', viewValue: 'Characato' },
        { value: 'Chiguata', viewValue: 'Chiguata' },
        { value: 'Jacobo Hunter', viewValue: 'Jacobo Hunter' },
        { value: 'José Luis Bustamante y Rivero', viewValue: 'José Luis Bustamante y Rivero' },
        { value: 'La Joya', viewValue: 'La Joya' },
        { value: 'Mariano Melgar', viewValue: 'Mariano Melgar' },
        { value: 'Miraflores', viewValue: 'Miraflores' },
        { value: 'Mollebaya', viewValue: 'Mollebaya' },
        { value: 'Paucarpata', viewValue: 'Paucarpata' },
        { value: 'Pocsi', viewValue: 'Pocsi' },
        { value: 'Polobaya', viewValue: 'Polobaya' },
        { value: 'Quequeña', viewValue: 'Quequeña' },
        { value: 'Sabandía', viewValue: 'Sabandía' },
        { value: 'Sachaca', viewValue: 'Sachaca' },
        { value: 'San Juan de Siguas', viewValue: 'San Juan de Siguas' },
        { value: 'San Juan de Tarucani', viewValue: 'San Juan de Tarucani' },
        { value: 'Santa Isabel de Siguas', viewValue: 'Santa Isabel de Siguas' },
        { value: 'Santa Rita de Siguas', viewValue: 'Santa Rita de Siguas' },
        { value: 'Socabaya', viewValue: 'Socabaya' },
        { value: 'Tiabaya', viewValue: 'Tiabaya' },
        { value: 'Uchumayo', viewValue: 'Uchumayo' },
        { value: 'Vítor', viewValue: 'Vítor' },
        { value: 'Yanahuara', viewValue: 'Yanahuara' },
        { value: 'Yarabamba', viewValue: 'Yarabamba' },
        { value: 'Yura', viewValue: 'Yura' }
      ]
    },    
    {
      name: 'Cusco',
      disabled: false,
      di: [
        { value: 'Cusco', viewValue: 'Cusco' },
        { value: 'Ccorca', viewValue: 'Ccorca' },
        { value: 'Poroy', viewValue: 'Poroy' },
        { value: 'San Jerónimo', viewValue: 'San Jerónimo' },
        { value: 'San Sebastián', viewValue: 'San Sebastián' },
        { value: 'Santiago', viewValue: 'Santiago' },
        { value: 'Saylla', viewValue: 'Saylla' },
        { value: 'Wanchaq', viewValue: 'Wanchaq' }
      ],
    },
    {
      name: 'Ica',
      disabled: false,
      di: [
        { value: 'Ica', viewValue: 'Ica' },
        { value: 'La Tinguiña', viewValue: 'La Tinguiña' },
        { value: 'Los Aquijes', viewValue: 'Los Aquijes' },
        { value: 'Ocucaje', viewValue: 'Ocucaje' },
        { value: 'Pachacútec', viewValue: 'Pachacútec' },
        { value: 'Parcona', viewValue: 'Parcona' },
        { value: 'Pueblo Nuevo', viewValue: 'Pueblo Nuevo' },
        { value: 'Salas', viewValue: 'Salas' },
        { value: 'San José de los Molinos', viewValue: 'San José de los Molinos' },
        { value: 'San Juan Bautista', viewValue: 'San Juan Bautista' },
        { value: 'Santiago', viewValue: 'Santiago' },
        { value: 'Subtanjalla', viewValue: 'Subtanjalla' },
        { value: 'Tate', viewValue: 'Tate' },
        { value: 'Yauca del Rosario', viewValue: 'Yauca del Rosario' }
      ]
    },
    {
      name: 'Tumbes',
      disabled: false,
      di: [
        { value: 'Tumbes', viewValue: 'Tumbes' },
        { value: 'Corrales', viewValue: 'Corrales' },
        { value: 'La Cruz', viewValue: 'La Cruz' },
        { value: 'Pampas de Hospital', viewValue: 'Pampas de Hospital' },
        { value: 'San Jacinto', viewValue: 'San Jacinto' },
        { value: 'San Juan de la Virgen', viewValue: 'San Juan de la Virgen' }
      ]
    },
    {
      name: 'Piura',
      disabled: false,
      di: [
        { value: 'Piura', viewValue: 'Piura' },
        { value: 'Castilla', viewValue: 'Castilla' },
        { value: 'Catacaos', viewValue: 'Catacaos' },
        { value: 'Cura Mori', viewValue: 'Cura Mori' },
        { value: 'El Tallán', viewValue: 'El Tallán' },
        { value: 'La Arena', viewValue: 'La Arena' },
        { value: 'La Unión', viewValue: 'La Unión' },
        { value: 'Las Lomas', viewValue: 'Las Lomas' },
        { value: 'Tambo Grande', viewValue: 'Tambo Grande' },
        { value: 'Veintiséis de Octubre', viewValue: 'Veintiséis de Octubre' }
      ]
    },
    {
      name: 'Lambayeque',
      disabled: false,
      di: [
        { value: 'Lambayeque', viewValue: 'Lambayeque' },
        { value: 'Chochope', viewValue: 'Chochope' },
        { value: 'Illimo', viewValue: 'Illimo' },
        { value: 'Jayanca', viewValue: 'Jayanca' },
        { value: 'Mochumí', viewValue: 'Mochumí' },
        { value: 'Mórrope', viewValue: 'Mórrope' },
        { value: 'Motupe', viewValue: 'Motupe' },
        { value: 'Olmos', viewValue: 'Olmos' },
        { value: 'Pacora', viewValue: 'Pacora' },
        { value: 'Salas', viewValue: 'Salas' },
        { value: 'San José', viewValue: 'San José' },
        { value: 'Túcume', viewValue: 'Túcume' }
      ]
    },
    {
      name: 'La Libertad',
      disabled: false,
      di: [
        { value: 'Trujillo', viewValue: 'Trujillo' },
        { value: 'El Porvenir', viewValue: 'El Porvenir' },
        { value: 'Florencia de Mora', viewValue: 'Florencia de Mora' },
        { value: 'Huanchaco', viewValue: 'Huanchaco' },
        { value: 'La Esperanza', viewValue: 'La Esperanza' },
        { value: 'Laredo', viewValue: 'Laredo' },
        { value: 'Moche', viewValue: 'Moche' },
        { value: 'Poroto', viewValue: 'Poroto' },
        { value: 'Salaverry', viewValue: 'Salaverry' },
        { value: 'Simbal', viewValue: 'Simbal' },
        { value: 'Víctor Larco Herrera', viewValue: 'Víctor Larco Herrera' }
      ]
    },
    {
      name: 'Áncash',
      disabled: false,
      di: [
        { value: 'Huaraz', viewValue: 'Huaraz' },
        { value: 'Cochabamba', viewValue: 'Cochabamba' },
        { value: 'Colcabamba', viewValue: 'Colcabamba' },
        { value: 'Huanchay', viewValue: 'Huanchay' },
        { value: 'Independencia', viewValue: 'Independencia' },
        { value: 'Jangas', viewValue: 'Jangas' },
        { value: 'La Libertad', viewValue: 'La Libertad' },
        { value: 'Olleros', viewValue: 'Olleros' },
        { value: 'Pampas Grande', viewValue: 'Pampas Grande' },
        { value: 'Pariacoto', viewValue: 'Pariacoto' },
        { value: 'Pira', viewValue: 'Pira' },
        { value: 'Tarica', viewValue: 'Tarica' }
      ]
    },
    {
      name: 'Moquegua',
      disabled: false,
      di: [
        { value: 'Moquegua', viewValue: 'Moquegua' },
        { value: 'Carumas', viewValue: 'Carumas' },
        { value: 'Cuchumbaya', viewValue: 'Cuchumbaya' },
        { value: 'Samegua', viewValue: 'Samegua' },
        { value: 'San Cristóbal', viewValue: 'San Cristóbal' },
        { value: 'Torata', viewValue: 'Torata' }
      ]
    },
    {
      name: 'Tacna',
      disabled: false,
      di: [
        { value: 'Tacna', viewValue: 'Tacna' },
        { value: 'Alto de la Alianza', viewValue: 'Alto de la Alianza' },
        { value: 'Calana', viewValue: 'Calana' },
        { value: 'Ciudad Nueva', viewValue: 'Ciudad Nueva' },
        { value: 'Inclán', viewValue: 'Inclán' },
        { value: 'Pachía', viewValue: 'Pachía' },
        { value: 'Palca', viewValue: 'Palca' },
        { value: 'Pocollay', viewValue: 'Pocollay' },
        { value: 'Sama', viewValue: 'Sama' },
        { value: 'Coronel Gregorio Albarracín Lanchipa', viewValue: 'Coronel Gregorio Albarracín Lanchipa' }
      ]
    },    
    {
      name: 'Cajamarca',
      disabled: false,
      di: [
        { value: 'Cajamarca', viewValue: 'Cajamarca' },
        { value: 'Asunción', viewValue: 'Asunción' },
        { value: 'Chetilla', viewValue: 'Chetilla' },
        { value: 'Cospán', viewValue: 'Cospán' },
        { value: 'Jesús', viewValue: 'Jesús' },
        { value: 'Llacanora', viewValue: 'Llacanora' },
        { value: 'Los Baños del Inca', viewValue: 'Los Baños del Inca' },
        { value: 'Magdalena', viewValue: 'Magdalena' },
        { value: 'Matara', viewValue: 'Matara' },
        { value: 'Namora', viewValue: 'Namora' },
        { value: 'San Juan', viewValue: 'San Juan' }
      ]
    },
    {
      name: 'Amazonas',
      disabled: false,
      di: [
        { value: 'Chachapoyas', viewValue: 'Chachapoyas' },
        { value: 'Asunción', viewValue: 'Asunción' },
        { value: 'Balsas', viewValue: 'Balsas' },
        { value: 'Cheto', viewValue: 'Cheto' },
        { value: 'Chiliquín', viewValue: 'Chiliquín' },
        { value: 'Chuquibamba', viewValue: 'Chuquibamba' },
        { value: 'Granada', viewValue: 'Granada' },
        { value: 'Huancas', viewValue: 'Huancas' },
        { value: 'La Jalca', viewValue: 'La Jalca' },
        { value: 'Leimebamba', viewValue: 'Leimebamba' },
        { value: 'Levanto', viewValue: 'Levanto' },
        { value: 'Magdalena', viewValue: 'Magdalena' },
        { value: 'Mariscal Castilla', viewValue: 'Mariscal Castilla' },
        { value: 'Molinopampa', viewValue: 'Molinopampa' },
        { value: 'Montevideo', viewValue: 'Montevideo' },
        { value: 'Olleros', viewValue: 'Olleros' },
        { value: 'Quinjalca', viewValue: 'Quinjalca' },
        { value: 'San Francisco de Daguas', viewValue: 'San Francisco de Daguas' },
        { value: 'San Isidro de Maino', viewValue: 'San Isidro de Maino' },
        { value: 'Soloco', viewValue: 'Soloco' },
        { value: 'Sonche', viewValue: 'Sonche' }
      ]
    },
    {
      name: 'Loreto',
      disabled: false,
      di: [
        { value: 'Iquitos', viewValue: 'Iquitos' },
        { value: 'Alto Nanay', viewValue: 'Alto Nanay' },
        { value: 'Fernando Lores', viewValue: 'Fernando Lores' },
        { value: 'Indiana', viewValue: 'Indiana' },
        { value: 'Las Amazonas', viewValue: 'Las Amazonas' },
        { value: 'Mazán', viewValue: 'Mazán' },
        { value: 'Napo', viewValue: 'Napo' },
        { value: 'Punchana', viewValue: 'Punchana' },
        { value: 'Putumayo', viewValue: 'Putumayo' },
        { value: 'Torres Causana', viewValue: 'Torres Causana' },
        { value: 'Belén', viewValue: 'Belén' },
        { value: 'San Juan Bautista', viewValue: 'San Juan Bautista' }
      ]
    },
    {
      name: 'Ucayali',
      disabled: false,
      di: [
        { value: 'Callería', viewValue: 'Callería' },
        { value: 'Campoverde', viewValue: 'Campoverde' },
        { value: 'Iparía', viewValue: 'Iparía' },
        { value: 'Masisea', viewValue: 'Masisea' },
        { value: 'Yarinacocha', viewValue: 'Yarinacocha' },
        { value: 'Nueva Requena', viewValue: 'Nueva Requena' },
        { value: 'Manantay', viewValue: 'Manantay' }
      ]
    },
    {
      name: 'Madre de Dios',
      disabled: false,
      di: [
        { value: 'Tambopata', viewValue: 'Tambopata' },
        { value: 'Inambari', viewValue: 'Inambari' },
        { value: 'Las Piedras', viewValue: 'Las Piedras' },
        { value: 'Laberinto', viewValue: 'Laberinto' }
      ]
    },
    {
      name: 'Puno',
      disabled: false,
      di: [
        { value: 'Puno', viewValue: 'Puno' },
        { value: 'Acora', viewValue: 'Acora' },
        { value: 'Amantani', viewValue: 'Amantani' },
        { value: 'Atuncolla', viewValue: 'Atuncolla' },
        { value: 'Capachica', viewValue: 'Capachica' },
        { value: 'Chucuito', viewValue: 'Chucuito' },
        { value: 'Coata', viewValue: 'Coata' },
        { value: 'Huata', viewValue: 'Huata' },
        { value: 'Mañazo', viewValue: 'Mañazo' },
        { value: 'Paucarcolla', viewValue: 'Paucarcolla' },
        { value: 'Pichacani', viewValue: 'Pichacani' },
        { value: 'Platería', viewValue: 'Platería' },
        { value: 'San Antonio', viewValue: 'San Antonio' },
        { value: 'Tiquillaca', viewValue: 'Tiquillaca' },
        { value: 'Vilque', viewValue: 'Vilque' }
      ]
    },
    {
      name: 'Ayacucho',
      disabled: false,
      di: [
        { value: 'Ayacucho', viewValue: 'Ayacucho' },
        { value: 'Acocro', viewValue: 'Acocro' },
        { value: 'Acos Vinchos', viewValue: 'Acos Vinchos' },
        { value: 'Carmen Alto', viewValue: 'Carmen Alto' },
        { value: 'Chiara', viewValue: 'Chiara' },
        { value: 'Ocros', viewValue: 'Ocros' },
        { value: 'Pacaycasa', viewValue: 'Pacaycasa' },
        { value: 'Quinua', viewValue: 'Quinua' },
        { value: 'San José de Ticllas', viewValue: 'San José de Ticllas' },
        { value: 'San Juan Bautista', viewValue: 'San Juan Bautista' },
        { value: 'Santiago de Pischa', viewValue: 'Santiago de Pischa' },
        { value: 'Socos', viewValue: 'Socos' },
        { value: 'Tambillo', viewValue: 'Tambillo' },
        { value: 'Vinchos', viewValue: 'Vinchos' },
        { value: 'Jesús Nazareno', viewValue: 'Jesús Nazareno' }
      ]
    },
    {
      name: 'Apurímac',
      disabled: false,
      di: [
        { value: 'Abancay', viewValue: 'Abancay' },
        { value: 'Chacoche', viewValue: 'Chacoche' },
        { value: 'Circa', viewValue: 'Circa' },
        { value: 'Curahuasi', viewValue: 'Curahuasi' },
        { value: 'Huanipaca', viewValue: 'Huanipaca' },
        { value: 'Lambrama', viewValue: 'Lambrama' },
        { value: 'Pichirhua', viewValue: 'Pichirhua' },
        { value: 'San Pedro de Cachora', viewValue: 'San Pedro de Cachora' },
        { value: 'Tamburco', viewValue: 'Tamburco' }
      ]
    },
    {
      name: 'Huancavelica',
      disabled: false,
      di: [
        { value: 'Huancavelica', viewValue: 'Huancavelica' },
        { value: 'Acobambilla', viewValue: 'Acobambilla' },
        { value: 'Acoria', viewValue: 'Acoria' },
        { value: 'Conayca', viewValue: 'Conayca' },
        { value: 'Cuenca', viewValue: 'Cuenca' },
        { value: 'Huachocolpa', viewValue: 'Huachocolpa' },
        { value: 'Huayllahuara', viewValue: 'Huayllahuara' },
        { value: 'Izcuchaca', viewValue: 'Izcuchaca' },
        { value: 'Laria', viewValue: 'Laria' },
        { value: 'Manta', viewValue: 'Manta' },
        { value: 'Mariscal Cáceres', viewValue: 'Mariscal Cáceres' },
        { value: 'Moya', viewValue: 'Moya' },
        { value: 'Nuevo Occoro', viewValue: 'Nuevo Occoro' },
        { value: 'Palca', viewValue: 'Palca' },
        { value: 'Pilchaca', viewValue: 'Pilchaca' },
        { value: 'Vilca', viewValue: 'Vilca' },
        { value: 'Yauli', viewValue: 'Yauli' },
        { value: 'Ascensión', viewValue: 'Ascensión' }
      ]
    },
    {
      name: 'Junín',
      disabled: false,
      di: [
        { value: 'Huancayo', viewValue: 'Huancayo' },
        { value: 'Carhuacallanga', viewValue: 'Carhuacallanga' },
        { value: 'Chacapampa', viewValue: 'Chacapampa' },
        { value: 'Chicche', viewValue: 'Chicche' },
        { value: 'Chilca', viewValue: 'Chilca' },
        { value: 'Chongos Alto', viewValue: 'Chongos Alto' },
        { value: 'Chupaca', viewValue: 'Chupaca' },
        { value: 'Colca', viewValue: 'Colca' },
        { value: 'Cullhuas', viewValue: 'Cullhuas' },
        { value: 'El Tambo', viewValue: 'El Tambo' },
        { value: 'Huacrapuquio', viewValue: 'Huacrapuquio' },
        { value: 'Hualhuas', viewValue: 'Hualhuas' },
        { value: 'Huancán', viewValue: 'Huancán' },
        { value: 'Huasicancha', viewValue: 'Huasicancha' },
        { value: 'Huayucachi', viewValue: 'Huayucachi' },
        { value: 'Ingenio', viewValue: 'Ingenio' },
        { value: 'Pariahuanca', viewValue: 'Pariahuanca' },
        { value: 'Pilcomayo', viewValue: 'Pilcomayo' },
        { value: 'Pucará', viewValue: 'Pucará' },
        { value: 'Quichuay', viewValue: 'Quichuay' },
        { value: 'Quilcas', viewValue: 'Quilcas' },
        { value: 'San Agustín', viewValue: 'San Agustín' },
        { value: 'San Jerónimo de Tunán', viewValue: 'San Jerónimo de Tunán' },
        { value: 'Saño', viewValue: 'Saño' },
        { value: 'Sapallanga', viewValue: 'Sapallanga' },
        { value: 'Sicaya', viewValue: 'Sicaya' },
        { value: 'Santo Domingo de Acobamba', viewValue: 'Santo Domingo de Acobamba' },
        { value: 'Viques', viewValue: 'Viques' }
      ]
    },
    {
      name: 'Pasco',
      disabled: false,
      di: [
        { value: 'Chaupimarca', viewValue: 'Chaupimarca' },
        { value: 'Huachón', viewValue: 'Huachón' },
        { value: 'Huariaca', viewValue: 'Huariaca' },
        { value: 'Huayllay', viewValue: 'Huayllay' },
        { value: 'Ninacaca', viewValue: 'Ninacaca' },
        { value: 'Pallanchacra', viewValue: 'Pallanchacra' },
        { value: 'Paucartambo', viewValue: 'Paucartambo' },
        { value: 'San Francisco de Asís de Yarusyacán', viewValue: 'San Francisco de Asís de Yarusyacán' },
        { value: 'Simon Bolívar', viewValue: 'Simon Bolívar' },
        { value: 'Ticlacayán', viewValue: 'Ticlacayán' },
        { value: 'Tinyahuarco', viewValue: 'Tinyahuarco' },
        { value: 'Vicco', viewValue: 'Vicco' },
        { value: 'Yanacancha', viewValue: 'Yanacancha' }
      ]
    },
    {
      name: 'Huánuco',
      disabled: false,
      di: [
        { value: 'Huánuco', viewValue: 'Huánuco' },
        { value: 'Amarilis', viewValue: 'Amarilis' },
        { value: 'Chinchao', viewValue: 'Chinchao' },
        { value: 'Churubamba', viewValue: 'Churubamba' },
        { value: 'Margos', viewValue: 'Margos' },
        { value: 'Pillco Marca', viewValue: 'Pillco Marca' },
        { value: 'Quisqui', viewValue: 'Quisqui' },
        { value: 'San Francisco de Cayrán', viewValue: 'San Francisco de Cayrán' },
        { value: 'San Pedro de Chaulán', viewValue: 'San Pedro de Chaulán' },
        { value: 'Santa María del Valle', viewValue: 'Santa María del Valle' },
        { value: 'Yacus', viewValue: 'Yacus' },
        { value: 'Yarumayo', viewValue: 'Yarumayo' }
      ]
    },
    {
      name: 'San Martín',
      disabled: false,
      di: [
        { value: 'Moyobamba', viewValue: 'Moyobamba' },
        { value: 'Calzada', viewValue: 'Calzada' },
        { value: 'Habana', viewValue: 'Habana' },
        { value: 'Jepelacio', viewValue: 'Jepelacio' },
        { value: 'Soritor', viewValue: 'Soritor' },
        { value: 'Yantalo', viewValue: 'Yantalo' }
      ]
    },
    {
      name: 'Callao',
      disabled: false,
      di: [
        { value: 'Callao', viewValue: 'Callao' },
        { value: 'Bellavista', viewValue: 'Bellavista' },
        { value: 'Carmen de la Legua Reynoso', viewValue: 'Carmen de la Legua Reynoso' },
        { value: 'La Perla', viewValue: 'La Perla' },
        { value: 'La Punta', viewValue: 'La Punta' },
        { value: 'Ventanilla', viewValue: 'Ventanilla' },
        { value: 'Mi Perú', viewValue: 'Mi Perú' }
      ]
    },
  ];

  constructor(
    private formBuilder: FormBuilder,
    private ciudadService: CiudadService,
    private distritoService: DistritoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      hciudad: ['', Validators.required],
      hdistrito: ['', Validators.required]
    });

    // Cargar lista de ciudades
    this.ciudadService.list().subscribe((data) => {
      this.listaCiudades = data;
    });

    // Inicializar distritos filtrados
    this.filteredDistritoGroups = this.distritoGroups;

    // Filtrar distritos al cambiar el término de búsqueda
    this.distritoSearchControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this.filterDistricts(value ?? ''))
      )
      .subscribe(filteredGroups => {
        this.filteredDistritoGroups = filteredGroups;
      });
  }

  filterDistricts(searchValue: string): DistritoGroups[] {
    if (!searchValue) {
      return this.distritoGroups;
    }

    const lowercaseSearch = searchValue.toLowerCase();

    // Filtrar los grupos y los distritos
    return this.distritoGroups
      .map(group => ({
        ...group,
        di: group.di.filter(district => district.viewValue.toLowerCase().includes(lowercaseSearch))
      }))
      .filter(group => group.di.length > 0); // Excluir grupos sin coincidencias
  }

  aceptar(): void {
    if (this.form.valid) {
      this.distri.nombre_Distrito = this.form.value.hdistrito;
      this.distri.ciudad = { idCiudad: this.form.value.hciudad } as Ciudad; // Corregido el tipado

      this.distritoService.insert(this.distri).subscribe(() => {
        this.distritoService.list().subscribe((data) => {
          this.distritoService.setList(data);
          this.router.navigate(['Distritos']);
        });
      });
    }
  }
}

// Interfaz para definir los grupos de distritos
interface DistritoGroups {
  name: string;
  disabled?: boolean;
  di: { value: string; viewValue: string }[];
}