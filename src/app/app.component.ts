import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Firestore-Angular';

  /**
   * `item` указывает на объект `Observable` с типом `<any>`.
   *  Здесь важен тип входящего значения и он не описан и ка-бы неизвестен,
   *  поэтому `any`.
   */
  dataFromBase: Observable<any[]>;

  constructor(firestore: AngularFirestore) {
    /**
     * В классе конструктора получаем данные из базы `firestore`.
     * Получаем всю колекцию `collection-base`.
     */
    this.dataFromBase = firestore.collection('collection-base').valueChanges()

  }

  ngOnInit(): void { }


}
