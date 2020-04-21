import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { isNotTemporalEmailValidator } from '../../utils/validators';
import { User } from '../../models/user.model';
import { UsersService } from '../../services/users.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.page.html',
  styleUrls: ['./reactive-form.page.scss'],
})
export class ReactiveFormPage implements OnInit {

  public form: FormGroup;

  public user: User = {} as User;

  public state: String;

  public sendForm: boolean;

  constructor(private formBuilder: FormBuilder,
              private userService: UsersService,
              private toastController: ToastController) {

  }

  public ngOnInit(): void {

    // this.basicFormInitialization();
    this.state = "loading";
    this.sendForm = false;
    this.complexFormInitialization();
  }

  private basicFormInitialization(): void {

    this.form = this.formBuilder.group({
      name: '',
      birthDate: '',
      sex: '',
      phone: '',
      email: ''
    });

    const user = this.userService.getStaticUser();

    this.form.patchValue(user);
  }

  private complexFormInitialization(): void {

    this.form = this.formBuilder.group({
      id: '',
      name: ['', [Validators.required, Validators.minLength(3)]],
      birthDate: ['', Validators.required],
      sex: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email,
        isNotTemporalEmailValidator]]
    });

    this.userService.getRemoteUser().subscribe(
      (user: User) => {
        this.form.patchValue(user);
        this.state = "loaded";
      },
      (error) => {
        this.state = 'error';
      }
    );
  }

  public reloadUser(): void {
    this.state = "loading";
    this.complexFormInitialization();
  }

  public submitForm(): void {
    this.sendForm = true;
    this.user = this.form.value;
    this.userService.updateUser(this.user).subscribe(
      (user: User) => {
        this.sendForm = false;
        this.presentToast('Usuario editado correctamente.');
      },
      (error) => {
        this.sendForm = false;
        this.presentToast(error.statusText);
      }
    )
  }

  public async presentToast(message: string) {
    const toast = await this.toastController.create({
      header: 'Edición de Usuario',
      message: message,
      duration: 3000
    });
    toast.present();
  }
}
