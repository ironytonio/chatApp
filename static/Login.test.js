import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Login from "./Login";

// Мокуємо TouchableOpacity з react-native-gesture-handler
jest.mock("react-native-gesture-handler", () => ({
  TouchableOpacity: jest.fn().mockImplementation((props) => {
    return <mock-TouchableOpacity {...props} />;
  }),
}));

describe("Login component", () => {
  it("renders correctly", () => {
    const navigation = {
      navigate: jest.fn(),
    };

    const { getByPlaceholderText, getByText } = render(
      <Login navigation={navigation} />
    );

    // Перевірка наявності полів введення та кнопки
    const emailInput = getByPlaceholderText("Enter email");
    const passwordInput = getByPlaceholderText("Enter password");
    const loginButton = getByText("Log in");

    expect(emailInput).toBeTruthy();
    expect(passwordInput).toBeTruthy();
    expect(loginButton).toBeTruthy();
  });

  it("handles login with valid credentials", () => {
    const navigation = {
      navigate: jest.fn(),
    };

    const { getByPlaceholderText, getByText } = render(
      <Login navigation={navigation} />
    );

    // Симулюємо введення коректних імейлу та пароля
    const emailInput = getByPlaceholderText("Enter email");
    const passwordInput = getByPlaceholderText("Enter password");
    const loginButton = getByText("Log in");

    fireEvent.changeText(emailInput, "test@example.com");
    fireEvent.changeText(passwordInput, "password123");

    fireEvent.press(loginButton);

    // Перевірка, чи викликано navigate з очікуваними параметрами
    expect(navigation.navigate).toHaveBeenCalledWith("Home");
  });
});
