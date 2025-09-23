/**
 * Utilidades de validación de formularios accesibles
 */

export interface ValidationResult {
  isValid: boolean;
  message: string;
}

/**
 * Valida un campo de nombre
 */
export function validateName(name: string): ValidationResult {
  if (!name || name.trim().length === 0) {
    return {
      isValid: false,
      message: "El nombre es obligatorio"
    };
  }
  
  if (name.trim().length < 2) {
    return {
      isValid: false,
      message: "El nombre debe tener al menos 2 caracteres"
    };
  }
  
  if (name.trim().length > 50) {
    return {
      isValid: false,
      message: "El nombre no puede tener más de 50 caracteres"
    };
  }
  
  return {
    isValid: true,
    message: ""
  };
}

/**
 * Valida un campo de email
 */
export function validateEmail(email: string): ValidationResult {
  if (!email || email.trim().length === 0) {
    return {
      isValid: false,
      message: "El correo electrónico es obligatorio"
    };
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      isValid: false,
      message: "Por favor, introduce un correo electrónico válido"
    };
  }
  
  return {
    isValid: true,
    message: ""
  };
}

/**
 * Valida un campo de mensaje
 */
export function validateMessage(message: string): ValidationResult {
  if (!message || message.trim().length === 0) {
    return {
      isValid: false,
      message: "El mensaje es obligatorio"
    };
  }
  
  if (message.trim().length < 10) {
    return {
      isValid: false,
      message: "El mensaje debe tener al menos 10 caracteres"
    };
  }
  
  if (message.trim().length > 1000) {
    return {
      isValid: false,
      message: "El mensaje no puede tener más de 1000 caracteres"
    };
  }
  
  return {
    isValid: true,
    message: ""
  };
}

/**
 * Muestra un error de validación de forma accesible
 */
export function showFieldError(fieldId: string, message: string): void {
  const field = document.getElementById(fieldId) as HTMLInputElement | HTMLTextAreaElement;
  const errorElement = document.getElementById(`${fieldId}-error`);
  
  if (field && errorElement) {
    field.setAttribute('aria-invalid', 'true');
    field.setAttribute('aria-describedby', `${fieldId}-error`);
    errorElement.textContent = message;
    errorElement.setAttribute('role', 'alert');
    errorElement.setAttribute('aria-live', 'polite');
    
    // Enfocar el campo con error
    field.focus();
  }
}

/**
 * Limpia un error de validación
 */
export function clearFieldError(fieldId: string): void {
  const field = document.getElementById(fieldId) as HTMLInputElement | HTMLTextAreaElement;
  const errorElement = document.getElementById(`${fieldId}-error`);
  
  if (field && errorElement) {
    field.setAttribute('aria-invalid', 'false');
    errorElement.textContent = '';
    errorElement.removeAttribute('role');
    errorElement.removeAttribute('aria-live');
  }
}

/**
 * Valida todo el formulario de contacto
 */
export function validateContactForm(formData: FormData): { isValid: boolean; errors: string[] } {
  const name = formData.get('from_name') as string;
  const email = formData.get('user_email') as string;
  const message = formData.get('message') as string;
  
  const errors: string[] = [];
  
  const nameValidation = validateName(name);
  if (!nameValidation.isValid) {
    errors.push(nameValidation.message);
    showFieldError('name', nameValidation.message);
  } else {
    clearFieldError('name');
  }
  
  const emailValidation = validateEmail(email);
  if (!emailValidation.isValid) {
    errors.push(emailValidation.message);
    showFieldError('email', emailValidation.message);
  } else {
    clearFieldError('email');
  }
  
  const messageValidation = validateMessage(message);
  if (!messageValidation.isValid) {
    errors.push(messageValidation.message);
    showFieldError('message', messageValidation.message);
  } else {
    clearFieldError('message');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
}

/**
 * Muestra un mensaje de estado accesible
 */
export function showStatusMessage(message: string, type: 'success' | 'error' | 'info' = 'info'): void {
  const statusElement = document.getElementById('submit-status');
  if (statusElement) {
    statusElement.textContent = message;
    statusElement.setAttribute('role', 'status');
    statusElement.setAttribute('aria-live', 'polite');
    
    // Aplicar estilos según el tipo
    statusElement.className = `text-center ${type === 'success' ? 'text-green-600' : type === 'error' ? 'text-red-600' : 'text-blue-600'}`;
  }
}

/**
 * Limpia el mensaje de estado
 */
export function clearStatusMessage(): void {
  const statusElement = document.getElementById('submit-status');
  if (statusElement) {
    statusElement.textContent = '';
    statusElement.removeAttribute('role');
    statusElement.removeAttribute('aria-live');
    statusElement.className = 'text-center';
  }
}

/**
 * Inicializa la validación en tiempo real del formulario
 */
export function initializeFormValidation(): void {
  const form = document.getElementById('contact-form') as HTMLFormElement;
  if (!form) return;
  
  const nameField = document.getElementById('name') as HTMLInputElement;
  const emailField = document.getElementById('email') as HTMLInputElement;
  const messageField = document.getElementById('message') as HTMLTextAreaElement;
  
  // Validación en tiempo real
  if (nameField) {
    nameField.addEventListener('blur', () => {
      const validation = validateName(nameField.value);
      if (!validation.isValid) {
        showFieldError('name', validation.message);
      } else {
        clearFieldError('name');
      }
    });
  }
  
  if (emailField) {
    emailField.addEventListener('blur', () => {
      const validation = validateEmail(emailField.value);
      if (!validation.isValid) {
        showFieldError('email', validation.message);
      } else {
        clearFieldError('email');
      }
    });
  }
  
  if (messageField) {
    messageField.addEventListener('blur', () => {
      const validation = validateMessage(messageField.value);
      if (!validation.isValid) {
        showFieldError('message', validation.message);
      } else {
        clearFieldError('message');
      }
    });
  }
  
  // Validación al enviar el formulario
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(form);
    const validation = validateContactForm(formData);
    
    if (validation.isValid) {
      showStatusMessage('Enviando mensaje...', 'info');
      // Aquí se procesaría el envío del formulario
      // Por ahora simulamos un envío exitoso
      setTimeout(() => {
        showStatusMessage('¡Mensaje enviado correctamente! Te responderé pronto.', 'success');
        form.reset();
        clearStatusMessage();
      }, 2000);
    } else {
      showStatusMessage('Por favor, corrige los errores en el formulario.', 'error');
    }
  });
}
