export function validateTelInput(event: React.KeyboardEvent<HTMLInputElement>): void {
  const inputValue = event.key;
  const allowedCharacters = /^[0-9]$/;
  const specialKeys = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Delete', 'Enter'];
  
  if (!specialKeys.includes(inputValue) && !allowedCharacters.test(inputValue)) {
      event.preventDefault();
  }
};