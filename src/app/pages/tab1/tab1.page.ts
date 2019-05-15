import {Component} from '@angular/core';
import {DeseosService} from '../../services/deseos.service';
import {Lista} from '../../models/lista.model';
import {Router} from '@angular/router';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


    constructor(public deseosService: DeseosService, private router:Router) {
    }

    agregarLista(){
        this.router.navigateByUrl('/tabs/tab1/agregar');
    }

}
