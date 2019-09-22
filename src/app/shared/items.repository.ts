import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Item} from '../pages/inventory-list/inventory-list.component';

export interface IRepository {
  endpoint: string;

  GetAll(): Observable<any[]>;

  GetById(id): Observable<any>;

  Create(T);

  Update(T, id?);

  Delete(id);
}

@Injectable({
  providedIn: 'root'
})
export class ItemsService implements IRepository {
  endpoint = 'https://localhost:44309' + '/api/items';

  constructor(private httpClient: HttpClient) {
  }

  public GetAll(): Observable<Item[]> {
    return this.httpClient
      .get<Item[]>(this.endpoint);
  }

  public GetById(id): Observable<Item> {
    return this.httpClient
      .get<Item>(`${this.endpoint}/${id}`);
  }

  public Create(item: Item): Observable<Item> {
    return this.httpClient
      .post<Item>(this.endpoint, item);
  }

  public Update(item: Item): Observable<Item> {
    return this.httpClient
      .put<Item>(`${this.endpoint}/${item.id}`, item);
  }

  public Delete(id: string) {
    return this.httpClient
      .delete(`${this.endpoint}/${id}`);
  }

}
