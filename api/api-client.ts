import { APIRequestContext, expect } from '@playwright/test';
import { retry } from '../utils/retry-logic';

export class ApiClient {
  private request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async getUser(userId: number) {
    return retry(async () => {
      const response = await this.request.get(`/api/users/${userId}`, {
        timeout: 5000,
      });
      await expect(response.ok()).toBeTruthy();
      return response.json();
    }, { retries: 3, delay: 1000 });
  }

  async createUser(data: any) {
    return retry(async () => {
      const response = await this.request.post('/api/users', {
        data,
        timeout: 5000,
      });
      await expect(response.ok()).toBeTruthy();
      return response.json();
    }, { retries: 3, delay: 1000 });
  }
}