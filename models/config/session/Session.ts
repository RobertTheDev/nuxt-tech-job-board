export interface SessionUser {
  _id: string;
  emailAddress: string;
  firstName: string;
  lastName: string;
}

declare module '@sidebase/nuxt-session' {
  interface Session {
    user?: SessionUser;
  }
}
