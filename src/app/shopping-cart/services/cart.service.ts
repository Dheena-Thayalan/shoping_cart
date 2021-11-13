import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor() { }
  jsonData: any[]=[{
    "p_name":"Apple",
    "p_id":1,
    "p_cost":30,
    "p_availability":1,
    "p_details":"Imported from Swiss",
    "p_category":"Premium",
    'p_img':"./assets/apple.jpg"
    },
    {
    "p_name":"Mango",
    "p_id":2,
    "p_cost":50,
    "p_availability":1,
    "p_details":"Farmed at Selam",
    "p_category":"Tamilnadu",
    'p_img':"./assets/mango1.jpg"
    },
    {
    "p_name":"Bananna",
    "p_id":3,
    "p_cost":5,
    "p_availability":0,
    'p_img':"./assets/bananas.jpg"
    },
    {
    "p_name":"Orange",
    "p_id":4,
    "p_cost":25,
    "p_availability":1,
    "p_details":"from Nagpur",
    "p_category":"Premium",
    'p_img':"./assets/oranges.jpg"
    }];
    
add(id:number,data:any){
  let indexvalue: any[]=this.jsonData[id];
  indexvalue = this.jsonData.map((e: any) => {
    let obj = e;
    if(obj.p_id==id) {obj.p_quantity =data[id];}
   return obj;
  })
}
}
