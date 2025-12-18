📱 **GUIA RÁPIDO DE DEPLOY**

## ✅ Arquivos criados:
- ✓ eas.json - Configuração de builds
- ✓ DEPLOY.md - Documentação completa
- ✓ deploy.sh - Script automatizado
- ✓ app.json - Atualizado com configurações

## 🚀 Próximos Passos:

### 1️⃣ Fazer Login no Expo (OBRIGATÓRIO)
```bash
npx eas-cli login
```
Se não tem conta: https://expo.dev/signup

### 2️⃣ Gerar Build de Teste (APK)
```bash
npm run build:preview
```
Ou:
```bash
npx eas-cli build --platform android --profile preview
```

### 3️⃣ Gerar Build de Produção (AAB para Play Store)
```bash
npm run build:android
```
Ou:
```bash
npx eas-cli build --platform android --profile production
```

### 4️⃣ Acompanhar Build
- Acesse: https://expo.dev/accounts/[seu-usuario]/projects/enterprise-mobile-app/builds
- O build leva ~10-20 minutos
- Você receberá notificação por email

### 5️⃣ Baixar e Testar APK
- Clique no link do build quando concluir
- Baixe o APK
- Instale em seu dispositivo Android

### 6️⃣ Publicar na Play Store
```bash
npm run submit:android
```
Ou faça upload manual em: https://play.google.com/console

## 📋 ANTES DE PUBLICAR:

### Criar Assets (IMPORTANTE):
1. **Ícone do App** (1024x1024): assets/icon.png
2. **Splash Screen** (1284x2778): assets/splash.png
3. **Adaptive Icon** (1024x1024): assets/adaptive-icon.png

### Google Play Console:
1. Criar conta ($25 taxa única)
2. Criar novo app
3. Preencher:
   - Título do app
   - Descrição curta e completa
   - Screenshots (mínimo 2)
   - Feature graphic (1024x500)
   - Categoria
   - Política de privacidade

## 🛠️ Comandos Úteis:

```bash
# Ver builds
npx eas-cli build:list

# Ver projeto
npx eas-cli project:info

# Configurar credenciais
npx eas-cli credentials

# Build iOS (requer conta Apple Developer $99/ano)
npm run build:ios

# Script automatizado
./deploy.sh
```

## ⚠️ Notas Importantes:

1. **Primeira build**: Pode levar até 30 minutos
2. **Credenciais**: EAS gerencia automaticamente
3. **Revisão Play Store**: 2-7 dias
4. **iOS**: Requer conta Apple Developer
5. **Testes**: Sempre teste o APK antes de publicar

## 🔗 Links Úteis:

- Dashboard EAS: https://expo.dev
- Play Console: https://play.google.com/console
- Documentação: https://docs.expo.dev/eas/

## 📱 Resultado Final:

Após publicação, seu app estará disponível em:
- 🤖 Google Play Store
- 🍎 Apple App Store (se fizer build iOS)
- 📥 Download direto (APK para testes)

## 🆘 Suporte:

Problemas? Consulte DEPLOY.md para troubleshooting detalhado.
