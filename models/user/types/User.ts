export default interface User {
  _id: string;
  createdAt: Date;
  updatedAt?: Date;
  firstName: string;
  lastName: string;
  emailAddress: string;
  emailVerified?: Date;
  resetPasswordTokenExpiryTime?: number;
  resetPasswordToken?: string;
}
