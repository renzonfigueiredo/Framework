import { LoginDto } from "./dto/login.dto";
import { RegisterDto } from "./dto/register.dto";
import { LoginUseCase } from "./use-cases/login.use-cases";
import { RegisterUseCase } from "./use-cases/register.use-cases";
import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthService {
    constructor(
        private readonly registerUseCase:RegisterUseCase,
        private readonly loginUseCase:LoginUseCase,
    ) {}

    async register(data:RegisterDto) {
        return await this.registerUseCase.execute(data);
    }
    
    async login(data:LoginDto) {
        return await this.loginUseCase.execute(data);
    }
}   