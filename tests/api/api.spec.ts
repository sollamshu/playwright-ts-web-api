import { test, expect } from '../../fixtures/user-fixture';

test.describe('API Tests', () => {
  test('should get user data', async ({ apiClient }) => {
    const user = await apiClient.getUser(1);
    expect(user).toHaveProperty('id', 1);
  });

  test('should create user', async ({ apiClient }) => {
    const newUser = { name: 'Test User', email: 'test@example.com' };
    const response = await apiClient.createUser(newUser);
    expect(response).toHaveProperty('name', 'Test User');
  });
});