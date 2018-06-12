import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShopPage } from '../shop/shop';

/**
 * Generated class for the BuyoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buyout',
  templateUrl: 'buyout.html',
})
export class BuyoutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuyoutPage');
  }

  addMilk() {

    alert("Milk has been added to the list");

  }

  addBread() {

    alert("Bread has been added to the list");

  }
   
  addApples() {

    alert("Apples have been added to the list");

  }

  goBuy() {

    this.navCtrl.push(ShopPage);

  }

}
