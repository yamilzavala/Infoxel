import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ItemModel } from '../models/item.model';
import { API_KEY } from './configuration';

@Injectable({providedIn: 'root'})
export class DataStorageService {

    constructor(private http: HttpClient) {}

    fetchData(text: string): Observable<any> {
        const body = (text.toLowerCase()).trim();
    // code to fetch data
        // return this.http.get('url');
        // return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
        // return this.http.get('https://www.googleapis.com/books/v1/volumes?q=quilting');
        return this.http.get(`https://backend.welo.tv/contents/get_welos/${body}/`);
    }
}
