import { Component, OnInit,HostBinding } from '@angular/core';
import{ServicioLoginService} from '../../servicios/servicio-login.service'; //importar el servicio de login
import { ModeloLogin } from '../../Modelos/modeloLogin';//IMPORTAR MODELO DE LOGIN

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @HostBinding('class')clases='row';
  
  //instanciar la clase de modelo login
  modeloValidarLogin:ModeloLogin={
    dni:"",
    password:""
  }

// instanciar la clase ServicioLoginService en el constructor
  constructor(private serviciologinservice:ServicioLoginService) { }

  ngOnInit(): void {
    //en el arranque de la aplicacion llamo al metodo obtenerLogin
    this.serviciologinservice.obtenerLogin(this.modeloValidarLogin).subscribe(
      res=> console.log(res),
      err=>console.error(err)
    );
  }
  //lamar los datos del html
  llamarDatosLogin(){
   this.serviciologinservice.obtenerLogin(this.modeloValidarLogin).subscribe(
     res=> {
       console.log("datos *****"+res)
      },
     err=>console.error(err)
     
   )
  }





}
