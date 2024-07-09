import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Login from './Login';

// Мокуємо navigation.navigate
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));

describe('Login component', () => {
  it('renders correctly', () => {
    const navigation = {
      navigate: jest.fn(),
    };

    const { getByPlaceholderText, getByText } = render(<Login navigation={navigation} />);

    // Перевірка наявності полів введення та кнопки
    const emailInput = getByPlaceholderText('Enter email');
    const passwordInput = getByPlaceholderText('Enter password');
    const loginButton = getByText('Log in');

    expect(emailInput).toBeTruthy();
    expect(passwordInput).toBeTruthy();
    expect(loginButton).toBeTruthy();
  });

  it('handles login with valid credentials', () => {
    const navigation = {
      navigate: jest.fn(),
    };

    const { getByPlaceholderText, getByText } = render(<Login navigation={navigation} />);

    // Симулюємо введення коректних імейлу та пароля
    const emailInput = getByPlaceholderText('Enter email');
    const passwordInput = getByPlaceholderText('Enter password');
    const loginButton = getByText('Log in');

    fireEvent.changeText(emailInput, 'test@example.com');
    fireEvent.changeText(passwordInput, 'password123');

    fireEvent.press(loginButton);

    // Перевірка, чи викликано navigate з очікуваними параметрами
    expect(navigation.navigate).toHaveBeenCalledWith('Home');
  });

  it('displays error message with empty credentials', () => {
    const { getByText } = render(<Login />);

    const loginButton = getByText('Log in');

    fireEvent.press(loginButton);

    // Перевірка наявності повідомлення про помилку
    expect(getByText('Email and password are required.')).toBeTruthy();
  });
});

