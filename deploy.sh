#!/bin/bash

# Script para fazer deploy da aplicação Enterprise Mobile

echo "🚀 Iniciando processo de deploy..."
echo ""

# Verificar se está logado no EAS
echo "📝 Passo 1: Login no EAS"
echo "Execute: npx eas-cli login"
echo "Digite suas credenciais da conta Expo"
echo ""
read -p "Pressione Enter após fazer login..."

# Configurar projeto EAS
echo ""
echo "⚙️ Passo 2: Configurando projeto EAS"
npx eas-cli build:configure

# Escolher tipo de build
echo ""
echo "📦 Escolha o tipo de build:"
echo "1) Preview (APK para testes)"
echo "2) Production (AAB para Play Store)"
echo "3) Ambos"
read -p "Escolha uma opção (1-3): " BUILD_CHOICE

case $BUILD_CHOICE in
  1)
    echo ""
    echo "🔨 Gerando build de preview (APK)..."
    npx eas-cli build --platform android --profile preview
    ;;
  2)
    echo ""
    echo "🔨 Gerando build de produção (AAB)..."
    npx eas-cli build --platform android --profile production
    ;;
  3)
    echo ""
    echo "🔨 Gerando build de preview (APK)..."
    npx eas-cli build --platform android --profile preview
    echo ""
    echo "🔨 Gerando build de produção (AAB)..."
    npx eas-cli build --platform android --profile production
    ;;
  *)
    echo "Opção inválida!"
    exit 1
    ;;
esac

echo ""
echo "✅ Processo iniciado! Acompanhe o progresso em: https://expo.dev"
echo ""
echo "📥 Após o build concluir:"
echo "   - Preview (APK): Baixe e instale em dispositivos para teste"
echo "   - Production (AAB): Faça upload na Google Play Console"
echo ""
echo "Para submeter automaticamente para a Play Store:"
echo "   npx eas-cli submit --platform android"
