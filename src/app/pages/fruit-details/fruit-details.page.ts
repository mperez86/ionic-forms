import { Component, OnInit } from '@angular/core';
import { FruitsService } from 'src/app/services/fruits.service';
import { ActivatedRoute } from '@angular/router';
import { Fruit } from 'src/app/models/fruit.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-fruit-details',
  templateUrl: './fruit-details.page.html',
  styleUrls: ['./fruit-details.page.scss'],
})
export class FruitDetailsPage implements OnInit {

  public fruit: Fruit = {} as Fruit;
  
  public form: FormGroup;

  public state: String;

  public sendForm: boolean;


  constructor(
    private fruitsService: FruitsService,
    private activatedRoute: ActivatedRoute, 
    private formBuilder: FormBuilder,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    this.state = "loading";
    this.sendForm = false;
    this.complexFormInitialization();
  }

  private complexFormInitialization(): void {

    this.form = this.formBuilder.group({
      description: ['', Validators.required],
    });

    this.fruitsService.getFruit(
      +this.activatedRoute.snapshot.paramMap.get('id')).subscribe((fruit: Fruit) => {
        this.fruit = fruit;
        this.state = "loaded";
        this.form.patchValue(this.fruit);
      }
    );
  }

  public reloadFruit(): void {
    this.state = "loading";
    this.complexFormInitialization();
  }

  public submitForm(): void {
    this.sendForm = true;
    this.fruit.description = this.form.value.description;
    this.fruitsService.updateFruit(this.fruit).subscribe(
      (fruit: Fruit) => {
        this.form.patchValue(this.fruit);
        this.sendForm = false;
        this.presentToast('Descripción editada correctamente.');
      },
      (error) => {
        this.sendForm = false;
        this.state = "error";
        this.presentToast(error.statusText);
      }
    )
  }

  public async presentToast(message: string) {
    const toast = await this.toastController.create({
      header: 'Edición de Fruta',
      message: message,
      duration: 3000
    });
    toast.present();
  }

}
