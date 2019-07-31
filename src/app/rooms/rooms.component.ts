import { Component, OnInit } from '@angular/core';
import { Item } from '../shopping-item.interface';
import { InfoService } from '../info.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Item1 } from '../item1';
import { Item2 } from '../item2';
import { Item3 } from '../item3';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  constructor(public info:InfoService) { 
    this.shoppingList$ = this.info.getShoppingList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
     )
   );

   this.shoppingList1$ = this.info.getShoppingList1().snapshotChanges().pipe(
    map(changes =>
      changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
   )
 );

 this.shoppingList2$ = this.info.getShoppingList2().snapshotChanges().pipe(
  map(changes =>
    changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
 )
);

this.shoppingList3$ = this.info.getShoppingList3().snapshotChanges().pipe(
  map(changes =>
    changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
 )
);
 }


  shoppingList$:Observable<Item[]>;
  shoppingList1$:Observable<Item1[]>;
  shoppingList2$:Observable<Item2[]>;
  shoppingList3$:Observable<Item3[]>;


  item: Item = {
    name:"",
    surname:"",
    imageUrl:""
  
  }

  item1: Item1 = {
    name:"",
    surname:"",
    imageUrl:""
  
  }

  item2: Item2 = {
    name:"",
    surname:"",
    imageUrl:""
  
  }

  item3: Item3 = {
    name:"",
    surname:"",
    imageUrl:""
  
  }

  ngOnInit() {
  }

  addItem(Item)
  {
  this.info.addItem(Item ).then(ref=>{
    console.log(ref.key)
    
    
  });
  }


  addItem1(Item1)
  {
  this.info.addItem1(Item1 ).then(ref=>{
    console.log(ref.key)
    
    
  });
  }


  addItem2(Item2)
  {
  this.info.addItem2(Item2 ).then(ref=>{
    console.log(ref.key)
    
    
  });
  }


  addItem3(Item3)
  {
  this.info.addItem3(Item3 ).then(ref=>{
    console.log(ref.key)
    
    
  });
  }

}
