import {Component, OnInit} from '@angular/core';
import {DeseosService} from '../../services/deseos.service';
import {ActivatedRoute} from '@angular/router';
import {Lista} from '../../models/lista.model';
import {ListaItem} from '../../models/lista-item.model';
import {element} from 'protractor';

@Component({
    selector: 'app-agregar',
    templateUrl: './agregar.page.html',
    styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

    lista: Lista;
    nombreItem = '';

    constructor(private deseosService: DeseosService, private route: ActivatedRoute) {
        const listaid = this.route.snapshot.paramMap.get('listaid');
        this.lista = this.deseosService.obtenerLista(listaid);
    }

    ngOnInit() {
    }

    agregarItem() {
        if (this.nombreItem.length === 0) {
            return;
        }
        const nuevoitem = new ListaItem(this.nombreItem);
        this.lista.items.push(nuevoitem);
        this.nombreItem = '';
        this.deseosService.guardarStorage();
    }

    cambioCheck(item: ListaItem) {
        const pendientes = this.lista.items.filter(elemento => !elemento.completado).length;

        if (pendientes === 0) {
            this.lista.terminadaEn = new Date();
            this.lista.terminada = true;
        } else {
            this.lista.terminadaEn = null;
            this.lista.terminada = false;
        }

        this.deseosService.guardarStorage();
    }


    borrar(i: number) {
        this.lista.items.splice(i, 1);
        this.deseosService.guardarStorage();
    }

}
