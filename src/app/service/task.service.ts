import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private hc:HttpClient) { 

  }

  addtask(data:any): Observable<any>{
    return this.hc.post('https://vasudevsp.github.io/Task-board/Taskadd',data)
  }
  gettaskList(): Observable<any>{
    return this.hc.get('https://vasudevsp.github.io/Task-board/Taskadd')
  }
  updateList(id: number,data: any): Observable<any>{
    return this.hc.put(`https://vasudevsp.github.io/Task-board/Taskadd/${id}`,data);
  }
  deletetask(id: number): Observable<any>{
    return this.hc.delete(`https://vasudevsp.github.io/Task-board/Taskadd/${id}`);
  }
}
