import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  api_key="8c4d8a35882b4791a0378b889a3bc054"
search=new BehaviorSubject("")
  constructor( private http:HttpClient) { }



initSources(){
  return this.http.get('https://newsapi.org/v2/sources?language=en&apiKey='+this.api_key)
}
getArticlesByid(source:string){
  return this.http.get('https://newsapi.org/v2/top-headlines?sources=' + source + '&apiKey=' + this.api_key )
}
initArticles(){
  return this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=' + this.api_key);
}
}



