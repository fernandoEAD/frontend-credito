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
  carregando: boolean = false;
  erro: string = '';
  buscaRealizada: boolean = false;

  constructor(private creditoService: CreditoService) {}

  buscar(): void {
    const buscaLimpa = this.busca.trim();

    // Validações básicas
    if (!buscaLimpa) {
      this.erro = 'Por favor, digite um número para buscar.';
      return;
    }

    // Validação de caracteres (apenas números)
    if (!/^\d+$/.test(buscaLimpa)) {
      this.erro = 'Digite apenas números. Não use espaços, pontos ou outros caracteres.';
      return;
    }

    // Validação de tamanho mínimo
    if (buscaLimpa.length < 3) {
      this.erro = 'O número deve ter pelo menos 3 dígitos.';
      return;
    }

    // Validação de tamanho máximo
    if (buscaLimpa.length > 50) {
      this.erro = 'O número não pode ter mais de 50 dígitos.';
      return;
    }

    this.carregando = true;
    this.erro = '';
    this.resultado = [];
    this.buscaRealizada = true;

    const isNumeroCredito = buscaLimpa.length <= 10;

    if (isNumeroCredito) {
      this.creditoService.buscarPorNumeroCredito(buscaLimpa).subscribe({
        next: (res) => {
          this.resultado = [res];
          this.carregando = false;
        },
        error: (error) => {
          this.carregando = false;
          this.resultado = [];
          this.erro = this.getErrorMessage(error, 'crédito');
        }
      });
    } else {
      this.creditoService.buscarPorNfse(buscaLimpa).subscribe({
        next: (res) => {
          this.resultado = res;
          this.carregando = false;
        },
        error: (error) => {
          this.carregando = false;
          this.resultado = [];
          this.erro = this.getErrorMessage(error, 'NFS-e');
        }
      });
    }
  }

  limparErro(): void {
    this.erro = '';
  }

  limparBusca(): void {
    this.busca = '';
    this.resultado = [];
    this.erro = '';
    this.buscaRealizada = false;
  }

  onEnterKey(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.buscar();
    }
  }

  private getErrorMessage(error: any, tipo: string): string {
    if (error.status === 404) {
      return `Nenhum crédito encontrado para o ${tipo} informado.`;
    } else if (error.status === 400) {
      return `Dados inválidos. Verifique o número do ${tipo} e tente novamente.`;
    } else if (error.status === 500) {
      return 'Erro interno do servidor. Tente novamente mais tarde.';
    } else if (error.status === 0) {
      return 'Erro de conexão. Verifique sua internet e tente novamente.';
    } else {
      return `Erro ao buscar ${tipo}. Tente novamente.`;
    }
  }
}
