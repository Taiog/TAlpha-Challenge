import * as Yup from 'yup'
import { pt } from 'yup-locale-pt'

Yup.setLocale({
  ...pt,
  string: {
    uuid: '${path} inválido',
    email: '${path} deve ser um email válido',
    length: '${path} deve ter exatamente ${length} caracteres',
    lowercase: '${path} deve estar em maiúsculo',
    uppercase: '${path} deve estar em minúsculo',
    min: ({ min, path }) => `${path} deve ter no mínimo ${min} ${min === 1 ? 'caractere' : 'caracteres'}`,
    max: ({ max, path }) => `${path} deve ter no máximo ${max} ${max === 1 ? 'caractere' : 'caracteres'}`,
    trim: '${path} não deve conter espaços no início ou no fim.',
    url: '${path} deve ter um formato de URL válida',
  },
  number: {
    min: '${path} deve ser maior que ${min}',
    max: '${path} deve ser menor que ${max}',
    integer: '${path} deve ser um número inteiro',
    lessThan: '${path} deve ser menor que ${less}',
    moreThan: '${path} deve ser maior que ${more}',
    negative: '${path} deve ser um número negativo',
    positive: '${path} deve ser um número positivo',
  },
  array: {
    min: '${path} deve ter no mínimo ${min} itens',
    length: '${path} deve ter exatamente ${length} itens',
    max: '${path} deve ter no máximo ${max} itens',
  },
  boolean: {
    isValue: '${path} deve ser ${value}',
  },
  date: {
    max: '${path} deve ser anterior à ${max} ',
    min: '${path} deve ser posterior à ${min} ',
  },
  object: {
    noUnknown: '${path} campo não pode ter chaves não especificadas na forma do objeto',
  },
  mixed: {
    default: '${path} é inválido',
    notNull: '${path} é obrigatório',
    required: '${path} é obrigatório',
    oneOf: '${path} deve ser um dos seguintes valores: ${values}',
    notType: ({ path, type, value, originalValue }) => {
      const isCast = originalValue != null && originalValue !== value
      let msg = `${path} deve ser um \`${type}\`, ` + `mas o valor final foi: \`${value}\`.`
      if (isCast) {
        msg += ` O valor original é \`${originalValue}\`.`
      }
      return msg
    },
    defined: '${path} não pode ser indefinido',
    notOneOf: '${path} não pode ser um dos seguintes valores: ${values}',
  },
})

export default Yup