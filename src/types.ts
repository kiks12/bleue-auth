import { Response, Request } from "express";

type AccountType = 'Google' | 'Facebook' | 'Email';

type Schema = {
  [key: string]: string;
}

export const validate = (obj: any, model: any) => {
  let count = 0
  for (let key of Object.keys(obj)) {
    if (model[key] === undefined) return false
    if (typeof obj[key] !== model[key]) return false
    count++;
  }
  if (count !== Object.keys(model).length) return false
  return true;
}

/* REGISTRATION API */

export interface IRegistrationInputBody {
  email: string;
  username: string;
  type: AccountType;
  password?: string;
  address: string;
  contact: string;
  verified: boolean;
  skills: string;
  description: string;
  followers: number;
  likes: number;
}

export interface IRegistrationOutput {
  registered: boolean;
  user: {
    email: string;
    username: string;
    type: AccountType;
    password?: string;
    address: string;
    contact: string;
  }
}

export const RegistrationInputSchema: Schema = {
  email: 'string',
  username: 'string',
  type: 'string',
  password: 'string',
  address: 'string',
  contact: 'string',
  verified: 'boolean',
  skills: 'string',
  description: 'string',
  followers: 'number',
  likes: 'number',
}

/* REGISTRATION API */


/* LOGIN/LOGOUT API */

export interface ILoginInputBody {
  email: string;
  mobile: boolean;
}

export interface ILoginOutput {
  loggedIn: boolean;
  accessToken: string;
}


export interface ILogoutInputBody {
  accessToken: string;
}

export interface ILogoutOutput {
  loggedOut: boolean;
}

/* LOGIN/LOGOUT API */