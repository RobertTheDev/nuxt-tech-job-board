import { hash, verify } from 'argon2';

export function hashPassword(password: string) {
  return hash(password);
}

export function verifyPassword(password: string, hashedPassword: string) {
  return verify(password, hashedPassword);
}
