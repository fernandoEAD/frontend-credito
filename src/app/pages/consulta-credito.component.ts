import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CreditoService, Credito } from '../services/credito.service';

@Component({
  selector: 'app-consulta-credito',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './consulta-credito.component.html',
  styleUrls: ['./consulta-credito.component.scss']
})
export class ConsultaCreditoComponent {
  busca: string = '';
  resultado: Credito[] = [];

  constructor(private creditoService: CreditoService) {}

  buscar(): void {
    if (!this.busca) return;

    const isNumeroCredito = this.busca.length <= 10;

    if (isNumeroCredito) {
      this.creditoService.buscarPorNumeroCredito(this.busca).subscribe({
        next: (res) => (this.resultado = [res]),
        error: () => (this.resultado = [])
      });
    } else {
      this.creditoService.buscarPorNfse(this.busca).subscribe({
        next: (res) => (this.resultado = res),
        error: () => (this.resultado = [])
      });
    }
  }
}
