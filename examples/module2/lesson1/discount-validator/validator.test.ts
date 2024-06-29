import { describe, expect, test } from 'vitest';
import { formValidator } from './validator';

/*
Dodaj nowe testy jednostkowe do projektu w folderze examples/module2/lesson1/discount-validator:

1. Dodaj scenariusz zakładający przekazanie poprawnych danych.

2. Rozwiń logikę modułu validator.ts. Zarówno first name jak i last name muszą mieć co najmniej jeden znak. Dodaj test jednostkowy, który potwierdzi działanie nowej reguły.

3. Jeśli parametr age nie jest liczbą, rzuć wyjątek. Dodaj test jednostkowy, który to zweryfikuje.
*/

describe('Form validation', () => {
    test('should not return an error if all fields are valid', () => {
        const errors = formValidator('John', 'Doe', 30);
        expect(errors).toEqual([]);
    })

    test('should return an error if age is negative', () => {
        const errors = formValidator('John', 'Doe', -1);
        expect(errors).toContain('Age must be a positive number');
    });

    test('should return an error if first name or last name is less than one character', () => {
        let errors = formValidator('', 'Doe', 30);
        expect(errors).toContain('First name must be at least one character');
    
        errors = formValidator('John', '', 30);
        expect(errors).toContain('Last name must be at least one character');
    });

    test('should return an error if age is not a number', () => {
        const errors = formValidator('John', 'Doe', NaN);
        expect(errors).toContain('Age must be a number');
    });
});