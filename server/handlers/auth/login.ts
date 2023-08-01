import { LoginSchemaType } from '../../validators/auth/loginSchema';
import findUserByEmailAddress from './findUserByEmailAddress';

export default async function login(body: LoginSchemaType) {
  // Find user in the database by its email address.
  const user = await findUserByEmailAddress(body.emailAddress);

  // Remove unwanted password field.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { password: userPassword, ...userWithoutPassword } = user;

  // Return user without the password field.
  return userWithoutPassword;
}
