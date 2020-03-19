//LOGIN.SERVICE.TS ARCHIVO PARA HACER CONSULTAS A LAS APIS
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';//IMPORTAR MODULO PARA HACER PETICIONES
import { ModeloLogin } from '../Modelos/modeloLogin';//IMPORTAR MODELO DE LOGIN

@Injectable({
  providedIn: 'root'
})
export class ServicioLoginService {
  //variable para ruta de login
  urlLogin='https://certificado-nodejs.herokuapp.com/api/';

// en el constructor creamos una variable privada de la clase httpClient
  constructor(private http: HttpClient) { }


  //metodo para obtener datos de login
obtenerLogin(login:ModeloLogin){
  return this.http.post(`${this.urlLogin}datos_usuario/getLogin`,login)
}
//metodo para obtener todos los datos


}