import {loginValidationSchema} from './auth';
import '@testing-library/jest-dom';

test('should return first letter Capitalized', async () => {

    const validInput = {
        email: 'test@example.com',
        password: 'validPassword123',
      };

      await expect(loginValidationSchema.isValid(validInput)).resolves.toBe(true);
});