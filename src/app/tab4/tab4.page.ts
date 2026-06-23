import { Component } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss'],
  standalone: false,
})
export class Tab4Page {

  servicios = [
    {
      icon: 'desktop-outline',
      title: 'Soporte Técnico',
      desc: 'Mantenimiento y reparación de computadoras, diagnóstico y solución de fallas hardware/software.'
    },
    {
      icon: 'terminal-outline',
      title: 'Sistemas Operativos',
      desc: 'Instalación y configuración de Windows y Linux (Ubuntu, Debian, CentOS, Fedora).'
    },
    {
      icon: 'server-outline',
      title: 'Servidores',
      desc: 'Instalación y configuración de servidores Windows Server y Linux (DNS, DHCP, File Server, Web).'
    },
    {
      icon: 'key-outline',
      title: 'Active Directory',
      desc: 'Instalación, configuración y administración de Active Directory, políticas de grupo y usuarios.'
    },
    {
      icon: 'grid-outline',
      title: 'Bases de Datos',
      desc: 'MySQL, MariaDB, PostgreSQL, Oracle, MongoDB. Instalación, configuración y optimización.'
    },
    {
      icon: 'code-slash-outline',
      title: 'Desarrollo de Apps',
      desc: 'Apps Cliente-Servidor, Web y Móviles con tecnologías modernas y arquitecturas escalables.'
    },
    {
      icon: 'hammer-outline',
      title: 'Herramientas Dev',
      desc: 'Python, HTML, CSS, Bootstrap, Tailwindcss, React, Angular, Ionic, PHP, Laravel.'
    }
  ];

  constructor() {}

}
