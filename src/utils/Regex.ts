export const Regex = {
    MAIUSCULO: /[A-Z]/,
    MINUSCULO: /[a-z]/,
    CARACTERE_ESPECIAL: /\W|_/,
    NUMERO: /[0-9]/,
    EMAIL:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  
    'DD/MM/YYYY':
      /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|(([1][26]|[2468][048]|[3579][26])00))))$/g,
  
    RG_MASCARA: /^[0-9]{1,10}$/,
    TELEFONE_MASCARA: /^\(\d{2}\)\s?\d{4,5}-\d{4}$/,
    CELULAR_MASCARA: /^\(\d{2}\)\s?\d{5}-\d{4}$/,
    TELEFONE_E_CELULAR_MASCARA: /^\(\d{2}\) \d{5}-\d{4}$|^\(\d{2}\) \d{4,5}-\d{4}$/,
    CEP_MASCARA: /^[0-9]{5}-?[0-9]{3}$/,
    CPF_MASCARA: /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}$/,
    CNPJ_MASCARA: /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/,
  }
  