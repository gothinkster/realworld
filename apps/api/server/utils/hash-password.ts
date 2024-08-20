import bcrypt from 'bcryptjs';

export const useHashPassword = (password: string) => {
    return bcrypt.hash(password, 10);
}
