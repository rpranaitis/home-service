import {capitalizeFirstLetter} from './strings';
import '@testing-library/jest-dom';

test('should return first letter Capitalized', () => {
expect(capitalizeFirstLetter('a')).toEqual('A');
});