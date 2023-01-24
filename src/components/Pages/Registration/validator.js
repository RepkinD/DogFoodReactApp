import * as Yup from 'yup'

export const createSigninAndSigninFormValidationSchema = Yup.object({
    email: Yup.string()
        .email('Неверный адрес электронной почты')
        .required('Обязательный'),
    password: Yup.string()
        .min(6, 'Не менее 6 символов')
        .max(16, 'Не более 16 символов')
        .required('Обязательный'),
    group: Yup.string()
        .required('Обязательный'),
})
