import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { category } from './models/category.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private readonly httpClient: HttpClient) { }

  getCategoryList():Observable<any>{//burasi ne ise
    return this.httpClient.get<any>(environment.apiUrl + 'todoitem')//burasi da o olmali
  }
}
