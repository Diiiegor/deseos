import {Component} from '@angular/core';
import {DeseosService} from '../../services/deseos.service';
import {Lista} from '../../models/lista.model';
import {Router} from '@angular/router';
import {AlertController} from '@ionic/angular';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


    constructor(public deseosService: DeseosService, private router: Router, private alertcontroller: AlertController) {
    }

    async agregarLista() {
        // this.router.navigateByUrl('/tabs/tab1/agregar');
        const alert = await this.alertcontroller.create({
            header: 'Nueva lista',
            inputs: [{
                name: 'titulo',
                type: 'text',
                placeholder: 'Nombre de la lista'
            }],
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancelar');
                    }
                },
                {
                    text: 'Crear',
                    handler: (data) => {
                        if (data.titulo.length === 0) {
                            return;
                        }
                        //TENGO QUE CREAR LA LISTA
                        const listaid = this.deseosService.crearLista(data.titulo);
                        this.router.navigateByUrl(`/tabs/tab1/agregar/${listaid}`);
                    }
                }
            ]
        });

        await alert.present();
    }

    listaSeleccionada(lista: Lista) {
        this.router.navigateByUrl(`/tabs/tab1/agregar/${lista.id}`);
    }

}
