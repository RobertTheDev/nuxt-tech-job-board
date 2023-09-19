export default interface User {
  // DEFAULT FIELDS
  _id: string;
  createdAt: Date;
  updatedAt?: Date;

  // CUSTOM FIELDS
  address?: {
    city: string;
    country: string;
    postalCode: string;
    state: string;
    street: string;
  } | null;
  contact?: {
    emailAddress?: string | null;
    githubAccountUrl?: string | null;
    landlinePhoneNumber?: string | null;
    linkedInAccountUrl?: string | null;
    mobilePhoneNumber?: string | null;
    websiteUrl?: string | null;
    xAccountUrl?: string | null;
  } | null;
  cv?: string | null;
  dateOfBirth?: Date;
  emailAddress: string;
  emailVerificationToken?: string;
  emailVerificationTokenExpiryTime?: number;
  emailVerified?: Date;
  firstName: string;
  isLookingFor?: string[] | null;
  isWillingToRelocate?: boolean;
  jobTitle?: string | null;
  lastName: string;
  password?: string;
  resetPasswordToken?: string;
  resetPasswordTokenExpiryTime?: number;
}
