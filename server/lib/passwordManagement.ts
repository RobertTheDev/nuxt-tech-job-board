import * as argon2 from 'argon2';

export function hashPassword(password: string) {
  return argon2.hash(password);
}

export function verifyPassword(password: string, hashedPassword: string) {
  return argon2.verify(password, hashedPassword);
}
