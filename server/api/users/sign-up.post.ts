import { usersCollection } from '../../lib/collections';
import { hashPassword } from '../../lib/passwordManagement';

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { password, ...input } = body; // Destructure password and other properties from the request body

    // Hash the password
    const hashedPassword = await hashPassword(password);

    // Update the input object with the hashed password
    const userWithHashedPassword = { ...input, password: hashedPassword };

    // Insert the user into the database
    return await usersCollection.insertOne(userWithHashedPassword);
  } catch (error) {
    return error;
  }
});
