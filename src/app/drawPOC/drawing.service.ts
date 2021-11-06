import { Injectable } from '@angular/core';
import{ Observable, of} from 'rxjs'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DrawingService {

  constructor(private http:HttpClient) {}

  postShape(data:any):Observable<any>{
    console.log('service', data)
    return this.http.post<any>('https://6026ea65186b4a0017780c7d.mockapi.io/get/draw/USERS/', data)
  }
 
  putShape(data:any, id:any):Observable<any>{
    console.log('service', data)
    return this.http.put<any>('https://6026ea65186b4a0017780c7d.mockapi.io/get/draw/USERS/'+id, data)
  }
 
  getShape():Observable<any>{
    return this.http.get<any>('https://6026ea65186b4a0017780c7d.mockapi.io/get/draw/USERS/')
  }
 
  deleteShape(id:any):Observable<any>{
    return this.http.delete<any>('https://6026ea65186b4a0017780c7d.mockapi.io/get/draw/USERS/'+id)
  }
}
