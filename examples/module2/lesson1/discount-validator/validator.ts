export function formValidator(
  firstName: string,
  lastName: string,
  age: number
) {
  const errors: string[] = [];

  if (!firstName || firstName.length < 1) {
    errors.push('First name must be at least one character');
  }

  if (!lastName || lastName.length < 1) {
    errors.push('Last name must be at least one character');
  }

  if (isNaN(age)) {
    errors.push('Age must be a number');
  }

  if (age < 0) {
    errors.push('Age must be a positive number');
  }

  return errors;
}