import { test, expect } from '@playwright/test';
import { ApiHelpers } from '../../utils/ApiHelpers';
import { apiData } from '../../testdata/apiData';

test.describe('API Tests @api', () => {
  test('Verify user can register accounts via POST /api/users', async ({ request }) => {
    const registerData = apiData.registerData;
    const response = await ApiHelpers.registerUser(request, registerData);
    await ApiHelpers.verifyStatusCode(response, 201);
    const registeredUserResponse = await response.json();
    expect(registeredUserResponse).toHaveProperty('firstName', registerData.firstName);
    expect(registeredUserResponse).toHaveProperty('lastName', registerData.lastName);
    expect(registeredUserResponse).toHaveProperty('gender', registerData.gender);
    expect(registeredUserResponse).toHaveProperty('birthDay', registerData.birthDay);
    expect(registeredUserResponse).toHaveProperty('id');
  });
});
