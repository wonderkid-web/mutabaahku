// import { DefaultSession } from "next-auth";

// declare module "next-auth" {
//   interface User {
//     role: "teacher" | "operator" | "parent";
//     schoolOrigin: string;
//   }

//   interface Session extends DefaultSession {
//     user?: User;
//   }
// }

// nextauth.d.ts
import { DefaultSession, DefaultUser } from "next-auth";
export enum Role {
  operator = "operator",
  teacher = "teacher",
  parent = "parent"
}
interface IUser extends DefaultUser {
  /**
   * Role of user
   */
  role?: "operator" | "teacher" | "parent";
  /**
   * Field to check whether a user has a subscription
   */
  schoolOrigin?: string;
}

declare module "next-auth" {
  interface User extends IUser {}
  interface Session {
    user?: User;
  }
}
declare module "next-auth/jwt" {
  interface JWT extends IUser {}
}