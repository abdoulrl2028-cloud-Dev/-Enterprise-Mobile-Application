<p align="center">
  <img src="https://raw.githubusercontent.com/abdoulrl2028-cloud-Dev/abdoulrl2028-cloud-Dev/main/assets/projects/enterprise.jpg" alt="Aplicativo mobile corporativo" width="100%">
</p>

# 📱 Enterprise Mobile Application

Aplicação mobile corporativa desenvolvida com **React Native + Expo**, focada em **segurança, usabilidade, escalabilidade e código resiliente**. O projeto segue **boas práticas de mercado** utilizadas em ambientes enterprise.

## 🚀 Tecnologias

- **React Native** - Framework para desenvolvimento mobile multiplataforma
- **Expo** - Plataforma para desenvolvimento React Native
- **Expo Router** - Sistema de navegação baseado em arquivos
- **TypeScript** - Superset JavaScript com tipagem estática
- **Zustand** - Gerenciamento de estado leve e moderno
- **Axios** - Cliente HTTP para requisições à API
- **Expo SecureStore** - Armazenamento seguro de dados sensíveis

## 📁 Estrutura do Projeto

```
src/
 ├── app/
 │    ├── (auth)/
 │    │    ├── login.tsx          # Tela de login
 │    │    └── register.tsx       # Tela de registro
 │    ├── (app)/
 │    │    ├── index.tsx          # Tela inicial (Home)
 │    │    └── profile.tsx        # Tela de perfil do usuário
 │    └── _layout.tsx             # Layout raiz com navegação
 ├── components/                  # Componentes reutilizáveis
 ├── hooks/                       # Hooks personalizados
 ├── services/
 │    ├── api.ts                  # Cliente HTTP configurado
 │    └── auth.service.ts         # Serviço de autenticação
 ├── store/
 │    └── auth.store.ts           # Store Zustand para autenticação
 ├── utils/                       # Funções utilitárias
 └── types/
      └── index.ts                # Definições de tipos TypeScript
```

## 🛠️ Instalação

### Pré-requisitos

- Node.js (v18 ou superior)
- npm ou yarn
- Expo Go (app no celular) ou emulador Android/iOS

### Passos para instalação

1. Clone o repositório:
```bash
git clone https://github.com/abdoulrl2028-cloud-Dev/-Enterprise-Mobile-Application.git
cd -Enterprise-Mobile-Application
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm start
```

## 📱 Executando a Aplicação

### No dispositivo físico

1. Instale o app **Expo Go** na Play Store (Android) ou App Store (iOS)
2. Execute `npm start`
3. Escaneie o QR code exibido no terminal com o app Expo Go

### No emulador

**Android:**
```bash
npm run android
```

**iOS (apenas no macOS):**
```bash
npm run ios
```

**Web:**
```bash
npm run web
```

## 🔐 Funcionalidades

### Autenticação
- ✅ Login de usuários
- ✅ Registro de novos usuários
- ✅ Armazenamento seguro de tokens
- ✅ Gerenciamento de sessão
- ✅ Logout

### Navegação
- ✅ Rotas protegidas
- ✅ Navegação baseada em arquivos (Expo Router)
- ✅ Transições suaves entre telas

### Gerenciamento de Estado
- ✅ Store global com Zustand
- ✅ Estado de autenticação centralizado
- ✅ Persistência de dados do usuário

## 🔧 Configuração da API

Para conectar com sua API backend, configure a URL base no arquivo `src/services/api.ts`:

```typescript
const API_URL = process.env.EXPO_PUBLIC_API_URL || 'https://api.example.com';
```

Ou crie um arquivo `.env` na raiz do projeto:

```env
EXPO_PUBLIC_API_URL=https://sua-api.com
```

## 📝 Uso

### Exemplo de Login

```typescript
import { useAuthStore } from '@/store/auth.store';

function LoginScreen() {
  const { login, isLoading } = useAuthStore();

  const handleLogin = async () => {
    await login('usuario@email.com', 'senha123');
  };

  return (
    // ... componente
  );
}
```

### Fazer requisições à API

```typescript
import { api } from '@/services/api';

// GET
const data = await api.get('/endpoint');

// POST
const response = await api.post('/endpoint', { data });

// PUT
await api.put('/endpoint', { data });

// DELETE
await api.delete('/endpoint');
```

## 🏗️ Arquitetura

### Padrões Utilizados

- **File-based Routing**: Navegação baseada na estrutura de arquivos
- **Separation of Concerns**: Separação clara entre UI, lógica e dados
- **Service Layer**: Camada de serviços para comunicação com APIs
- **State Management**: Gerenciamento de estado centralizado com Zustand
- **Type Safety**: Tipagem forte com TypeScript

### Fluxo de Autenticação

1. Usuário faz login/registro
2. `auth.service.ts` processa a requisição
3. Token é armazenado no `SecureStore` (armazenamento seguro)
4. `auth.store.ts` atualiza o estado global
5. Usuário é redirecionado para área autenticada
6. Todas as requisições HTTP incluem o token automaticamente via interceptors

## 🔒 Segurança

- 🔐 Armazenamento seguro de tokens com Expo SecureStore
- 🔐 Interceptors HTTP para adicionar tokens automaticamente
- 🔐 Tratamento de erros de autenticação (401)
- 🔐 Validação de formulários
- 🔐 Proteção contra injeção de código

## 🧪 Testes

```bash
# Executar testes
npm test

# Executar testes com cobertura
npm run test:coverage
```

## 📦 Build de Produção

### Android
```bash
eas build --platform android
```

### iOS
```bash
eas build --platform ios
```

## 🚀 Deploy

Para fazer deploy da aplicação, você pode usar o **EAS Build** da Expo:

```bash
# Instalar EAS CLI
npm install -g eas-cli

# Login
eas login

# Configurar projeto
eas build:configure

# Build para Android
eas build --platform android

# Build para iOS
eas build --platform ios
```

## 🎨 Customização

### Temas e Estilos

Os estilos estão definidos inline em cada componente usando `StyleSheet.create()`. Para customizar:

1. Crie um arquivo `src/constants/theme.ts` com suas cores e tamanhos
2. Importe e use nas telas

Exemplo:
```typescript
// src/constants/theme.ts
export const colors = {
  primary: '#007AFF',
  secondary: '#FF3B30',
  background: '#FFFFFF',
  text: '#000000',
};
```

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

## 📋 Roadmap

- [ ] Implementar testes unitários e de integração
- [ ] Adicionar suporte a temas (claro/escuro)
- [ ] Implementar refresh token automático
- [ ] Adicionar mais telas (dashboard, configurações)
- [ ] Implementar notificações push
- [ ] Adicionar suporte offline
- [ ] Implementar CI/CD

## 🐛 Problemas Conhecidos

Nenhum problema conhecido no momento. Reporte issues no GitHub!

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👥 Autores

- **Abdoul** - [@abdoulrl2028-cloud-Dev](https://github.com/abdoulrl2028-cloud-Dev)

## 📞 Suporte

Para suporte:
- Abra uma issue no GitHub
- Entre em contato via email

## 🙏 Agradecimentos

- Comunidade React Native
- Equipe Expo
- Contribuidores do projeto

---

⭐ Se este projeto foi útil para você, considere dar uma estrela no GitHub!

💬 Feedbacks e sugestões são sempre bem-vindos!
