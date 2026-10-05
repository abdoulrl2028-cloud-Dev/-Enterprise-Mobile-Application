<p align="center">
  <img src="https://raw.githubusercontent.com/abdoulrl2028-cloud-Dev/abdoulrl2028-cloud-Dev/main/assets/projects/enterprise.jpg" alt="Enterprise mobile app" width="100%">
</p>

# Enterprise Mobile Application

A business mobile app built with **React Native and Expo**, focused on security, usability, scalability, and resilient code. It follows practices used in enterprise environments.

## Technologies

- **React Native** — cross-platform mobile framework
- **Expo** — React Native platform
- **Expo Router** — file-based navigation
- **TypeScript** — static types
- **Zustand** — lightweight state management
- **Axios** — HTTP client
- **Expo SecureStore** — secure storage for sensitive data

## Project structure

```
src/
 ├── app/
 │    ├── (auth)/
 │    │    ├── login.tsx          # Login screen
 │    │    └── register.tsx       # Registration screen
 │    ├── (app)/
 │    │    ├── index.tsx          # Home
 │    │    └── profile.tsx        # User profile
 │    └── _layout.tsx             # Root layout and navigation
 ├── components/                  # Reusable components
 ├── hooks/
 ├── services/
 │    ├── api.ts                  # HTTP client
 │    └── auth.service.ts         # Authentication service
 ├── store/
 │    └── auth.store.ts           # Zustand auth store
 ├── utils/
 └── types/
      └── index.ts
```

## Install

Requirements: Node.js 18 or newer, npm or yarn, and Expo Go or an Android/iOS emulator.

```bash
git clone https://github.com/abdoulrl2028-cloud-Dev/-Enterprise-Mobile-Application.git
cd -Enterprise-Mobile-Application
npm install
npm start
```

## Run

On a phone: install **Expo Go**, run `npm start`, and scan the QR code.

On an emulator:

```bash
npm run android
npm run ios      # macOS only
npm run web
```

## Features

### Authentication

- Login and registration
- Secure token storage
- Session management and logout

### Navigation

- Protected routes
- File-based navigation with Expo Router

### State

- Global Zustand store
- Centralized auth state
- Persisted user data

## API configuration

Set the base URL in `src/services/api.ts`:

```typescript
const API_URL = process.env.EXPO_PUBLIC_API_URL || 'https://api.example.com';
```

Or create a `.env` file:

```env
EXPO_PUBLIC_API_URL=https://your-api.example
```

## Usage

```typescript
import { useAuthStore } from '@/store/auth.store';

const { login, isLoading } = useAuthStore();
await login('user@email.com', 'password123');
```

```typescript
import { api } from '@/services/api';

const data = await api.get('/endpoint');
const response = await api.post('/endpoint', { data });
await api.put('/endpoint', { data });
await api.delete('/endpoint');
```

## Architecture

- File-based routing
- Separation between UI, logic, and data
- A service layer for API calls
- Centralized state with Zustand
- Strong TypeScript types

Authentication flow:

1. The user logs in or registers.
2. `auth.service.ts` sends the request.
3. The token is stored in SecureStore.
4. `auth.store.ts` updates global state.
5. The user is sent to the signed-in area.
6. HTTP interceptors attach the token to later requests.

## Security

- Tokens stored with Expo SecureStore
- HTTP interceptors add the token
- 401 handling
- Form validation

## Tests and release builds

```bash
npm test
npm run test:coverage
eas build --platform android
eas build --platform ios
```

Deploy with Expo EAS Build:

```bash
npm install -g eas-cli
eas login
eas build:configure
eas build --platform android
eas build --platform ios
```

## Theming

Styles are defined inline with `StyleSheet.create()`. To customize them, add `src/constants/theme.ts` and import it in the screens.

## Roadmap

- [ ] Unit and integration tests
- [ ] Light and dark themes
- [ ] Automatic refresh tokens
- [ ] More screens (dashboard, settings)
- [ ] Push notifications
- [ ] Offline support
- [ ] CI/CD

## License and author

MIT. See [LICENSE](LICENSE).

Abdoul — [@abdoulrl2028-cloud-Dev](https://github.com/abdoulrl2028-cloud-Dev)
