# 📦 Guia de Deploy e Publicação

## 🚀 Preparação para Deploy

### 1. Instalar EAS CLI

```bash
npm install -g eas-cli
```

### 2. Login na conta Expo

```bash
eas login
```

### 3. Configurar o projeto

```bash
eas build:configure
```

## 📱 Build para Android

### Build de Desenvolvimento (APK para testes)

```bash
eas build --platform android --profile preview
```

Este comando irá:
- Gerar um APK que pode ser instalado diretamente
- Não requer assinatura da Play Store
- Ideal para testes internos

### Build de Produção

```bash
eas build --platform android --profile production
```

Este comando irá:
- Gerar um AAB (Android App Bundle) para a Play Store
- Incluir otimizações de produção
- Estar pronto para publicação

## 🍎 Build para iOS

### Build de Desenvolvimento

```bash
eas build --platform ios --profile preview
```

### Build de Produção

```bash
eas build --platform ios --profile production
```

**Nota:** Para builds iOS, você precisa:
- Conta Apple Developer ($99/ano)
- Certificados e perfis de provisionamento
- Configurar as credenciais no EAS

## 📤 Publicação

### Android - Google Play Store

1. **Criar uma conta Google Play Console** ($25 taxa única)

2. **Gerar o build de produção:**
```bash
eas build --platform android --profile production
```

3. **Fazer upload manual:**
   - Acesse [Google Play Console](https://play.google.com/console)
   - Crie um novo app
   - Faça upload do arquivo AAB
   - Preencha as informações do app (descrição, screenshots, etc.)
   - Envie para revisão

4. **Ou usar o EAS Submit (automático):**
```bash
eas submit --platform android
```

### iOS - Apple App Store

1. **Criar uma conta Apple Developer** ($99/ano)

2. **Criar o app no App Store Connect:**
   - Acesse [App Store Connect](https://appstoreconnect.apple.com)
   - Crie um novo app
   - Configure bundle ID e informações básicas

3. **Gerar o build:**
```bash
eas build --platform ios --profile production
```

4. **Submeter para revisão:**
```bash
eas submit --platform ios
```

Ou faça upload manual via Transporter/Xcode

## 🔄 Atualizações OTA (Over-The-Air)

Para atualizações JavaScript/TypeScript sem passar pelas lojas:

```bash
# Publicar atualização
eas update --branch production --message "Correção de bugs"

# Criar canais diferentes
eas update --branch preview --message "Nova feature em teste"
```

## 📋 Checklist antes de publicar

### Preparação do App

- [ ] Testar todas as funcionalidades
- [ ] Verificar permissões necessárias
- [ ] Criar ícones do app (1024x1024)
- [ ] Criar splash screen
- [ ] Adicionar screenshots (pelo menos 2)
- [ ] Escrever descrição atraente
- [ ] Definir keywords/categoria
- [ ] Configurar política de privacidade
- [ ] Testar em diferentes dispositivos

### Assets Necessários

**Android:**
- Ícone: 512x512 (PNG)
- Feature Graphic: 1024x500
- Screenshots: pelo menos 2 (phone e tablet)
- Descrição curta (80 caracteres)
- Descrição completa (4000 caracteres)

**iOS:**
- Ícone: 1024x1024 (PNG, sem transparência)
- Screenshots: para diferentes tamanhos de iPhone/iPad
- App Preview (vídeo opcional)
- Descrição (4000 caracteres)
- Keywords (100 caracteres)

## 🎨 Criar Assets do App

Vou criar scripts básicos para gerar os assets:

### Ícone do App
Crie uma imagem 1024x1024 e salve em `assets/icon.png`

### Splash Screen
Crie uma imagem 1284x2778 e salve em `assets/splash.png`

### Adaptive Icon (Android)
Crie uma imagem 1024x1024 e salve em `assets/adaptive-icon.png`

## 🔐 Configurar Credenciais

### Android

```bash
# Gerar keystore automaticamente (recomendado)
eas credentials

# Ou usar keystore existente
# Coloque seu keystore em ./android/app/my-release-key.keystore
```

### iOS

```bash
# EAS gerencia automaticamente
eas credentials

# Ou configure manualmente no Apple Developer Portal
```

## 📊 Monitoramento

Após publicação:

1. **Analytics:**
   - Integrar Firebase Analytics
   - Configurar Google Analytics
   - Usar Sentry para crash reports

2. **Atualizações:**
   - Monitorar reviews
   - Responder feedback de usuários
   - Publicar atualizações regulares

## 🛠️ Comandos Úteis

```bash
# Ver builds em andamento
eas build:list

# Cancelar build
eas build:cancel

# Ver informações do projeto
eas project:info

# Configurar credenciais
eas credentials

# Ver submissões
eas submit:list

# Criar preview build
eas build --platform android --profile preview

# Build para ambas plataformas
eas build --platform all --profile production
```

## 📝 Exemplo de Workflow Completo

```bash
# 1. Fazer login
eas login

# 2. Configurar projeto
eas build:configure

# 3. Build de preview para testes
eas build --platform android --profile preview

# 4. Testar o APK
# Baixe e instale em dispositivos de teste

# 5. Build de produção
eas build --platform android --profile production

# 6. Submeter para Play Store
eas submit --platform android

# 7. Publicar atualização OTA (quando necessário)
eas update --branch production --message "Bug fixes"
```

## ⚠️ Observações Importantes

1. **Primeira publicação** pode levar 2-7 dias para revisão
2. **Atualizações** geralmente são aprovadas em 1-3 dias
3. **iOS** tem processo de revisão mais rigoroso
4. **Android** permite testes internos antes da publicação
5. **Mantenha versão** e versionCode/buildNumber atualizados
6. **Teste sempre** antes de publicar

## 🆘 Solução de Problemas

**Build falhou?**
```bash
# Ver logs detalhados
eas build:view [BUILD_ID]

# Limpar cache
eas build --clear-cache
```

**Credenciais inválidas?**
```bash
# Resetar credenciais
eas credentials
```

**App rejeitado?**
- Leia cuidadosamente o feedback da loja
- Corrija os problemas apontados
- Resubmeta com as correções

## 📞 Suporte

- [Documentação EAS](https://docs.expo.dev/eas/)
- [Fórum Expo](https://forums.expo.dev/)
- [Discord Expo](https://chat.expo.dev/)
