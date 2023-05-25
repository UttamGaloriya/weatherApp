import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReloadService {
  private reloadSubject: Subject<void> = new Subject<void>();
  reload() {
    this.reloadSubject.next();
  }
  get reload$() {
    return this.reloadSubject.asObservable();
  }
  constructor() { }
}
