import { Component, OnInit } from '@angular/core';
import { FruitsService } from 'src/app/services/fruits.service';
import { Fruit } from 'src/app/models/fruit.model';


@Component({
  selector: 'app-fruit-list',
  templateUrl: './fruit-list.page.html',
  styleUrls: ['./fruit-list.page.scss'],
})
export class FruitListPage implements OnInit {

  public fruits: Fruit[];

  public state: String;

  constructor(private fruitsService: FruitsService) { }

  ngOnInit() {
    this.state = "loading";
    this.fruitsService.getFruits().subscribe(
      (fruits: Fruit[]) => {
        this.fruits = fruits
        this.state = "loaded";
      },
      (error) => {
        this.state = 'error';
      }
    );
  }

  ionViewWillEnter() {
    this.reloadFruits();
  }

  public reloadFruits(): void {
    this.state = "loading";
    this.ngOnInit();
  }

}
