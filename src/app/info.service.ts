import { Injectable } from '@angular/core';
import { Item } from './shopping-item.interface';
import { FirebaseDatabase } from '@angular/fire';
import { AngularFireDatabase } from '@angular/fire/database';
import * as firebase from 'firebase';
import { CREDENTIALS } from './credentials';
import { Hotel } from './hotel';
import { Item1 } from './item1';
import { Item2 } from './item2';
import { Item3 } from './item3';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor(public db:AngularFireDatabase) { 
   
  }
  uid0:string ='reviews';
  shoppingListRef1 = this.db.list<Item1>('two');
  shoppingListRef = this.db.list<Item>('one');;
 
  shoppingListRef2 = this.db.list<Item2>('three');
  shoppingListRef3 = this.db.list<Item3>('four');
 //shoppingListRef1 = this.db.list<Hotel>('stuff');
  
//blast ="hotel";

/*setuid(uid)
{
 // this.blast =uid;
  console.log("Look Here",uid)
 
 this.shoppingListRef = this.db.list<Item>('one');
 this.shoppingListRef1 = this.db.list<Item1>('two');
 this.shoppingListRef2 = this.db.list<Item2>('three');
this.shoppingListRef3 = this.db.list<Item3>('four');

  return this.blast;
}*/

getShoppingList()
{
  
return this.shoppingListRef;
}
getShoppingList1()
{
  
return this.shoppingListRef1;
}

getShoppingList2()
{
  
return this.shoppingListRef2;
}

getShoppingList3()
{
  
return this.shoppingListRef3;
}




addItem(item:Item)
{

console.log(item)
return this.shoppingListRef.push(item);
}

addItem1(item1:Item1)
{

console.log(item1)
return this.shoppingListRef1.push(item1);
}


addItem2(item2:Item2)
{

console.log(item2)
return this.shoppingListRef2.push(item2);
}

addItem3(item3:Item3)
{
console.log(item3)
return this.shoppingListRef3.push(item3);
}

}
