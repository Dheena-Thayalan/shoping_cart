import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  originalData: any[] = [];
  jsonData: any[] = [];
  quantityData: any[] = [];
  load: boolean = true;
  isLoading?: boolean;
  radioValue: string = '';

  constructor(private service: CartService, private modalService: NzModalService) { }

  ngOnInit(): void {
    this.jsonData = this.service.jsonData; this.originalData = this.jsonData; if (this.jsonData) this.load = false;
  }

  filter(value: any) {
    if (value == 'Reset') { this.jsonData = this.originalData; this.radioValue = ''; }
    else this.jsonData = this.originalData.filter((item: any) => item.p_category?.indexOf(value) !== -1);
  }

  quantity(e: any, id: any) { this.quantityData[id] = e.target.value; }

  onSubmit(name:string,id: number): void {
    if (this.quantityData[id]) {
      this.isLoading = true; this.service.add(id, this.quantityData);
      this.modalService.success({ nzTitle: "Success", nzContent: name + " added successfully", });
      this.isLoading=false;
    }
  }


}
