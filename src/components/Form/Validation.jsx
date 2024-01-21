/**
 * This is a simplified logic.
 * Consider using `import isEmail from 'validator/lib/isEmail'` from
 * https://github.com/validatorjs/validator.js/blob/7376945b4ce028b65955ae57b8fccbbf3fe58467/src/lib/isEmail.js
 * for a more robust version.
 */
function isEmail(string) {
    const re =
        /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    return re.test(string);
}
function isPhone(value) {
    // Используем регулярное выражение для проверки номера телефона
    // Регулярное выражение позволяет только цифрам и одному плюсу в начале
    const phonePattern = /^[+]?[0-9]+$/;
    return phonePattern.test(value);
}

export function email(value) {
    return value && !isEmail(value.trim()) ? 'Неправильный email' : null;
}

export function phone(value) {
    return value && !isPhone(value.trim()) ? 'Неправильный номер телефона' : null;
}


function isDirty(value) {
    return value || value === 0;
}

export function required(requiredFields, values) {
    return requiredFields.reduce(
        (fields, field) => ({
            ...fields,
            ...(isDirty(values[field]) ? undefined : { [field]: 'Обязательное поле' }),
        }),
        {},
    );
}
