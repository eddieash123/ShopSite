import { Component } from '@angular/core';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent {

  orderNumber = 0;
  user: any;
  formData: any;

  ngOnInit() {
    if (history.state.formData) {
      this.formData = history.state.formData;
    } else {
      this.formData = {
        firstName: '',
        lastName: '',
        address: '',
        email: '',
        phone: '',
        products: []
      };
    }
    this.orderNumber = Math.floor(100000 + Math.random() * 900000);
    console.log(this.formData.products)
  }


}
