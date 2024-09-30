import bcrypt from 'bcryptjs';

export const useHashPassword = (password: string) => {
    return bcrypt.hash(password, 10);
}

export const useDecrypt = (input: string, password: string) => {
    return bcrypt.compare(input, password);
}
