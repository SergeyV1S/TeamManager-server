import { PartialType } from "@nestjs/mapped-types";

export class LoginDto {
  mail?: string;
  phone?: string;
  password: string;
}
