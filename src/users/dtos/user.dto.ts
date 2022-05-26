import { Expose } from "class-transformer";

export class UserDto{
    @Expose()
    id: number;

    @Expose()
    email: string;

    @Expose()
    name: string;

    @Expose()
    password: string;

    @Expose()
    balance: number;
}