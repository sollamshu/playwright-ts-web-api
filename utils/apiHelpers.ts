import { APIRequestContext, APIResponse, expect } from '@playwright/test';
import { ApiLocators } from '../locators/ApiLocators';

export class ApiHelpers {
  static async registerUser(request: APIRequestContext, registerData: any): Promise<any> {
    const response = await request.post(ApiLocators.REGISTER_ENDPOINT, {
      data: registerData,
    });
    expect(response.ok()).toBeTruthy();
    return response;
  }

  static async verifyStatusCode(response: APIResponse, expectedStatus: number): Promise<void> {
    expect(response.status()).toBe(expectedStatus);
  }
}
