import { render, screen } from '@testing-library/react';
import App from './App';

test('teste titulo', () => {
  render(<App />);
  const testCase = document.querySelector('.App h1');
  expect(testCase).toHaveTextContent(/meu painel de controle/i);
});

test('teste deposito-recente', () => {
  render(<App />);
  var testCase = document.querySelector('#deposito-recente')
  expect(testCase).toHaveTextContent('3,024.00');
});


test('teste text_reports', () => {
  render(<App />);
  var testCase = document.querySelector('#text_reports span')
  expect(testCase).toHaveTextContent('Reports');
});

test('teste text_integrations', () => {
  render(<App />);
  var testCase = document.querySelector('#text_integrations span')
  expect(testCase).toHaveTextContent('Integrations');
});

test('teste text_current-month', () => {
  render(<App />);
  var testCase = document.querySelector('#text_current-month span')
  expect(testCase).toHaveTextContent('Current month');
});

test('texte text_lastquarter', () => { 
  render(<App/>);
  var testCase = document.querySelector('#text_last-quarter span')
  expect(testCase).toHaveTextContent('Last quarter');
});






