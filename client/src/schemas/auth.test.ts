import {loginValidationSchema} from './auth';
import '@testing-library/jest-dom';

test('should be valid inputs data for validation', async () => {

    const validInput = {
        email: 'test@example.com',
        password: 'validPassword123',
      };

      await expect(loginValidationSchema.isValid(validInput)).resolves.toBe(true);
});