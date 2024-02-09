

export const ValidateAño = (value) => {
    const currentDate = new Date();
    const birthDate = new Date(value);
    const age = currentDate.getFullYear() - birthDate.getFullYear();

    // Verificar si la edad es menor a 18 años
    return age >= 18 || 'Debes ser mayor de 18 años';
}

