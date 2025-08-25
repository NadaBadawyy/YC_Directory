import { Author, Startup } from "../../sanity.types";
import z from 'zod';
import { schema } from './FormValidation';

export type StartupCardType=Omit<Startup,'author'> & {author?:Author}
export type  FormType=z.infer<typeof schema>