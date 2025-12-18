import { api } from './api';
import * as SecureStore from 'expo-secure-store';

interface LoginResponse {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}

interface RegisterData {
  name: string;
  email: string;
  password: string;
}

class AuthService {
  private readonly TOKEN_KEY = 'auth_token';
  private readonly USER_KEY = 'user_data';

  async login(email: string, password: string): Promise<LoginResponse> {
    try {
      // Replace with actual API call
      // const response = await api.post<LoginResponse>('/auth/login', { email, password });
      
      // Simulated response for development
      const response: LoginResponse = {
        token: 'mock_token_' + Date.now(),
        user: {
          id: '1',
          name: 'Usuário Teste',
          email: email,
        },
      };

      await this.saveToken(response.token);
      await this.saveUser(response.user);

      return response;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  }

  async register(data: RegisterData): Promise<LoginResponse> {
    try {
      // Replace with actual API call
      // const response = await api.post<LoginResponse>('/auth/register', data);
      
      // Simulated response for development
      const response: LoginResponse = {
        token: 'mock_token_' + Date.now(),
        user: {
          id: '1',
          name: data.name,
          email: data.email,
        },
      };

      await this.saveToken(response.token);
      await this.saveUser(response.user);

      return response;
    } catch (error) {
      console.error('Register error:', error);
      throw error;
    }
  }

  async logout(): Promise<void> {
    try {
      await SecureStore.deleteItemAsync(this.TOKEN_KEY);
      await SecureStore.deleteItemAsync(this.USER_KEY);
    } catch (error) {
      console.error('Logout error:', error);
    }
  }

  async getToken(): Promise<string | null> {
    try {
      return await SecureStore.getItemAsync(this.TOKEN_KEY);
    } catch (error) {
      console.error('Get token error:', error);
      return null;
    }
  }

  async getUser(): Promise<LoginResponse['user'] | null> {
    try {
      const userData = await SecureStore.getItemAsync(this.USER_KEY);
      return userData ? JSON.parse(userData) : null;
    } catch (error) {
      console.error('Get user error:', error);
      return null;
    }
  }

  private async saveToken(token: string): Promise<void> {
    await SecureStore.setItemAsync(this.TOKEN_KEY, token);
  }

  private async saveUser(user: LoginResponse['user']): Promise<void> {
    await SecureStore.setItemAsync(this.USER_KEY, JSON.stringify(user));
  }
}

export const authService = new AuthService();
