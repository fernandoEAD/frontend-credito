# Sistema de Consulta de Créditos - Frontend

Sistema web desenvolvido em Angular para consulta de créditos constituídos, permitindo busca por número de NFS-e ou número do crédito.

## 🚀 Funcionalidades

- ✅ **Busca inteligente**: Diferencia automaticamente entre número de crédito (≤10 dígitos) e NFS-e (>10 dígitos)
- ✅ **Interface responsiva**: Otimizada para desktop, tablet e mobile
- ✅ **Validações robustas**: Verificação de formato, tamanho e caracteres
- ✅ **Feedback visual**: Loading indicators, mensagens de erro específicas
- ✅ **Experiência do usuário**: Design moderno com animações suaves
- ✅ **Todos os campos**: Exibe informações completas dos créditos

## 🛠️ Tecnologias

- **Angular 19.2.0** - Framework principal
- **TypeScript** - Linguagem de desenvolvimento
- **SCSS** - Estilização avançada
- **RxJS** - Programação reativa
- **Angular Forms** - Gerenciamento de formulários

## 📋 Dados Exibidos

O sistema exibe as seguintes informações dos créditos:

- **Número do Crédito**
- **Número da NFS-e**
- **Data de Constituição**
- **Valor ISSQN** (formatado em R$)
- **Tipo de Crédito** (com badge colorido)
- **Simples Nacional** (Sim/Não com status colorido)
- **Alíquota** (em %)
- **Valor Faturado** (formatado em R$)
- **Valor Dedução** (formatado em R$)
- **Base de Cálculo** (formatado em R$)

## 🚦 Como Usar

1. **Digite o número**: Entre com o número da NFS-e ou do crédito
2. **Busca automática**: O sistema identifica automaticamente o tipo
3. **Resultados**: Visualize os dados em tabela responsiva
4. **Limpar**: Use o botão "✕" para limpar a busca

## 💻 Instalação e Execução

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Passos para executar

1. **Clone o repositório**
```bash
git clone <url-do-repositorio>
cd frontend-credito
```

2. **Instale as dependências**
```bash
npm install
```

3. **Execute o servidor de desenvolvimento**
```bash
npm start
```

4. **Acesse a aplicação**
- Abra seu navegador em `http://localhost:4200`

### Scripts Disponíveis

```bash
npm start          # Inicia servidor de desenvolvimento
npm run build      # Build para produção
npm test           # Executa testes unitários
npm run watch      # Build em modo watch
```

## 🐳 Docker

Para executar com Docker:

```bash
# Build da imagem
docker build -t frontend-credito .

# Executar container
docker run -p 80:80 frontend-credito
```

## 🎨 Design System

### Cores Principais
- **Primária**: `#2563eb` (Azul)
- **Secundária**: `#64748b` (Cinza)
- **Sucesso**: `#10b981` (Verde)
- **Erro**: `#ef4444` (Vermelho)
- **Alerta**: `#f59e0b` (Amarelo)

### Tipografia
- **Fonte**: Inter (Google Fonts)
- **Pesos**: 300, 400, 500, 600, 700

### Responsividade
- **Desktop**: > 768px
- **Tablet**: 481px - 768px  
- **Mobile**: ≤ 480px

## 📡 API Integration

O frontend consome uma API REST com os seguintes endpoints:

```typescript
// Busca por NFS-e
GET /api/creditos/{numeroNfse}
// Retorna: Credito[]

// Busca por número do crédito  
GET /api/creditos/credito/{numeroCredito}
// Retorna: Credito
```

### Interface dos Dados

```typescript
interface Credito {
  numeroCredito: string;
  numeroNfse: string;
  dataConstituicao: string;
  valorIssqn: number;
  tipoCredito: string;
  simplesNacional: boolean;
  aliquota: number;
  valorFaturado: number;
  valorDeducao: number;
  baseCalculo: number;
}
```

## ✅ Validações Implementadas

- **Campo obrigatório**: Não permite busca vazia
- **Apenas números**: Aceita somente dígitos numéricos
- **Tamanho mínimo**: 3 dígitos
- **Tamanho máximo**: 50 dígitos
- **Trim automático**: Remove espaços extras

## 🔄 Estados da Aplicação

- **Inicial**: Formulário limpo
- **Carregando**: Loading spinner durante requisições
- **Sucesso**: Exibe resultados em tabela
- **Erro**: Mensagens específicas por tipo de erro
- **Vazio**: Mensagem quando não há resultados

## 🚨 Tratamento de Erros

- **404**: "Nenhum crédito encontrado"
- **400**: "Dados inválidos"
- **500**: "Erro interno do servidor"
- **0**: "Erro de conexão"
- **Outros**: Mensagem genérica

## 📱 Recursos Mobile

- Layout adaptado para telas pequenas
- Botões com tamanho adequado para toque
- Tabela com scroll horizontal
- Fonte e espaçamentos otimizados
- Formulário empilhado verticalmente

## 🔧 Arquitetura

```
src/
├── app/
│   ├── pages/                    # Páginas da aplicação
│   │   ├── consulta-credito.component.ts
│   │   ├── consulta-credito.component.html
│   │   └── consulta-credito.component.scss
│   ├── services/                 # Serviços
│   │   └── credito.service.ts
│   ├── app.component.*          # Componente raiz
│   ├── app.config.ts           # Configurações
│   └── app.routes.ts           # Rotas
├── styles.scss                 # Estilos globais
└── index.html                 # HTML principal
```

## 🧪 Testes

Para executar os testes:

```bash
npm test                    # Testes unitários
npm run test:coverage      # Com cobertura
```

## 📈 Performance

- **Lazy Loading**: Componentes carregados sob demanda
- **OnPush Strategy**: Otimização de change detection
- **Tree Shaking**: Remoção de código não utilizado
- **Minificação**: Build otimizado para produção

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---
