import { Injectable, Logger, UnauthorizedException } from "@nestjs/common";
import { FindUserByEmailRepository } from "../repository";
import { JwtService } from "@nestjs/jwt";
import { LoginDto } from "../dto/login.dto";
import { compare, hash } from "bcrypt";
@Injectable()
export class LoginUseCase {
    
    constructor(
        private readonly findUserByEmailRepository: FindUserByEmailRepository,
        private readonly logger: Logger,
        private readonly jwtService: JwtService
    ){}

    async execute(data: LoginDto) {
        this.logger.log('Attempting to log in user: ' + data.email);

        const user = await this.findUserByEmailRepository.findByEmail(data.email);
        if (!user) {
            throw new Error('Invalid credentials: Email or Password');
        }
        const isPasswordValid = await compare(data.password, user.passwordHash);
        if (!isPasswordValid) {
            throw new UnauthorizedException('Invalid credentials: Email or Password');
        }

        const payload = { sub: user.id, email: user.email };
         const acessToken = this.jwtService.sign(payload);

         this.logger.log('User logged in successfully: ' + data.email);
        return { acessToken,
                user: { id: user.id, name: user.name, email: user.email }
        };
    }
}   