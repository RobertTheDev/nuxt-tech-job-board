import getUserById from '../user/getUserById';
import updateUserById from '../user/updateUserById';
import updateUserSchema from '../../validators/users/updateUserSchema';

// This handler decrements a user's companies followed total and returns the updated user.

export default async function decrementUserCompaniesFollowed(userId: string) {
  // Get the user by its id.
  const user = await getUserById(userId);

  // Decrement the users followed companies by 1.
  const validatedBody = await updateUserSchema.validate({
    companiesFollowed: user.companiesFollowed - 1,
  });

  // Return the updated user.
  return await updateUserById(userId, validatedBody);
}
