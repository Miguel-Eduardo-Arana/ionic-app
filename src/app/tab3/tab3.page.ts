import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {

  constructor() {}

  enviarCorreo() {
    window.location.href = 'mailto:miguel.eduardo.arana@uneti.edu.ve?subject=Contacto desde la App';
  }

  abrirLink(url: string) {
    window.open(url, '_blank');
  }
}

