## Melhorias

- criar codecov
- rodar testes e2e no docker
- criar template de PR
- pipeline github actions testes
- pipeline github actions lint

## Bugfixes

- Response quando não acha id
- Bloquear mongo de criar instancias com mesmo id

---

## Frontend

### Épico: Autenticação

- Implementar a tela de login
- Implementar a tela de registro de usuário
- Implementar a funcionalidade de autenticação usando o backend

### Épico: Dashboard

- Implementar a tela de dashboard
- Implementar a exibição das transações do usuário na tela de dashboard
- Implementar a funcionalidade de adição de novas transações

### Épico: Perfil do usuário

- Implementar a tela de perfil do usuário
- Implementar a funcionalidade de edição do perfil do usuário

### Épico: Internacionalização

- Implementar suporte a múltiplos idiomas na aplicação

### Épico: Melhorias de usabilidade

- Implementar validação de campos nos formulários
- Implementar máscaras nos campos de data e valor
- Melhorar a interface da aplicação com a utilização de um framework de componentes
- Implementar um sistema de notificações para exibição de mensagens de erro e sucesso

### Épico: Testes

- Implementar testes automatizados para as funcionalidades da aplicação
- Implementar testes de integração com o backend

### Épico: Deploy

- Configurar a aplicação para deploy em ambiente de produção

---

## Backend

### Épico: Autenticação

- Criar rota de login para autenticar usuários
- Implementar autenticação por token
- Criar rota para registro de novos usuários
- Implementar validação de credenciais e retorno de erros apropriados

### Épico: Gerenciamento de Usuários

- Criar rota para listagem de usuários
- Implementar filtros na rota de listagem (por nome, email, etc.)
- Criar rota para detalhes de um usuário específico
- Implementar rota de atualização de usuários
- Implementar rota de exclusão de usuários
- Implementar validação de dados na criação e atualização de usuários
- Implementar permissões de acesso para admin e usuários comuns

### Épico: Gerenciamento de Transações

- Criar rota para listagem de transações
- Implementar filtros na rota de listagem (por categoria, data, etc.)
- Criar rota para detalhes de uma transação específica
- Implementar rota de criação de transações
- Implementar rota de atualização de transações
- Implementar rota de exclusão de transações
- Implementar validação de dados na criação e atualização de transações
- Implementar permissões de acesso para admin e usuários comuns

### Épico: Relatórios

- Criar rota para gerar relatório de transações por período
- Implementar filtros na rota de geração de relatório (por período, categoria, etc.)
- Gerar relatório em formato CSV ou PDF

### Épico: Integração com outras APIs

- Implementar integração com API de câmbio para conversão de moedas
- Implementar integração com API de notícias financeiras para exibição de notícias relevantes na aplicação
