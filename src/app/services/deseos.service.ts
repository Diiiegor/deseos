import {Injectable} from '@angular/core';
import {Lista} from '../models/lista.model';
import {json} from '@angular-devkit/core';
import {ListaItem} from '../models/lista-item.model';

@Injectable({
    providedIn: 'root'
})
export class DeseosService {

    public listas: Lista[] = [];

    constructor() {
        this.cargarStorage();
    }

    crearLista(titulo: string) {
        const nuevaLista = new Lista(titulo);
        this.listas.push(nuevaLista);
        this.guardarStorage();
        return nuevaLista.id;
    }

    obtenerLista(id: string | number) {
        id = Number(id);
        return this.listas.find(listadata => listadata.id === id);
    }

    guardarStorage() {
        localStorage.setItem('data', JSON.stringify(this.listas));
    }

    cargarStorage() {
        if (localStorage.getItem('data')) {
            this.listas = JSON.parse(localStorage.getItem('data'));
        } else {
            this.listas = [];
        }

    }


}
