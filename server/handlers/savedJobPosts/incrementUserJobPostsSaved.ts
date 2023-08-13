import getUserById from '../users/getUserById';
import updateUserById from '../users/updateUserById';
import updateUserSchema from '../../validators/users/updateUserSchema';

// This handler increments a users saved job post total and returns the updated user.

export default async function incrementUserJobPostsSaved(userId: string) {
  // Get the user by its id.
  const user = await getUserById(userId);

  // Increment the users saved job posts by 1.
  const validatedBody = await updateUserSchema.validate({
    jobPostsSaved: user.jobPostsSaved + 1,
  });

  // Return the updated user.
  return await updateUserById(userId, validatedBody);
}
