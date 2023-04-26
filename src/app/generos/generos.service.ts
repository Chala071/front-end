import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { generoCreacionDTO, generoDTO } from './genero';

@Injectable({
  providedIn: 'root'
})
export class GenerosService {

  constructor(private http: HttpClient) { }

  private apiURL = environment.apiURL;
  public obtenerTodos(pagina: number, cantidadRegistrosMostrar: number): Observable<any>{
    let params = new HttpParams();
    params = params.append('Pagina', pagina.toString());
    params = params.append('RecordsPorPagina', cantidadRegistrosMostrar.toString())
    return this.http.get<generoDTO[]>(this.apiURL + 'Generos/GetGenerosAsync',{observe: 'response', params});
  }  

  public crear(genero: generoCreacionDTO){
    return this.http.post(this.apiURL + 'Generos/PostGeneroAsync',genero);
  }
  
}
