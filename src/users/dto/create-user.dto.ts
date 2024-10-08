export class CreateUserDto {
    user_id: number;
    userName: string;
    password: string;
    full_name: string;
    api_key: string;
    date_added: Date;
    date_modified: Date;
}
