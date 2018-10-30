export const AUCTION_CONFIG = {
  uri: 'URL',
  messageSnackBar: {
    success: {
      message: 'LA SOLICITUD FUE PROCESADA CON ÉXITO',
      action: 'OK',
      type: 'snackbar-success',
      duration: 5000
    },
    error: {
      message: 'NO SE PUDO PROCESAR LA SOLICITUD',
      action: 'ERROR',
      type: 'snackbar-error',
      duration: 5000
    }
  },
  messageFormValidation: {
    required: 'Campo requerido',
    max: 'Excede el valor maximo del campo',
    maxlength: 'Excede el largo maximo del campo',
    validValue: 'Caracter introducido no permitido',
    validValueNumber: 'Solo se permiten numeros'
  },
  dialogSize: {
    height: '500px',
    with: '800px'
  }
};
