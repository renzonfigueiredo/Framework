import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';
import { CreateUserRepository } from '../repository/create-user.repository';
import { FindUserByEmailRepository } from '../repository';
import { Logger } from '@nestjs/common/services/logger.service';
import { JwtService } from '@nestjs/jwt/dist/jwt.service';
import { RegisterDto } from '../dto/register.dto';
import * as bcrypt from 'bcrypt';
import { BadRequestException } from '@nestjs/common/exceptions/bad-request.exception';
@Injectable()
export class RegisterUseCase {
    
      constructor(
        private readonly createUserRepository: CreateUserRepository,
        private readonly findUserByEmailRepository: FindUserByEmailRepository,
        private readonly logger: Logger,
        private readonly jwtService: JwtService
      ){}

    async execute(data: RegisterDto) {
        this.logger.log('Registering user... ');

        const existingUser = await this.findUserByEmailRepository.findByEmail(data.email);

        if (existingUser) {
             throw new BadRequestException('Email exists');
        }

        const passwordHash = await bcrypt.hash(data.password, 10);

        const user = await this.createUserRepository.create({
            name: data.name,
            email: data.email,
            passwordHash,
        });
           const payload = { sub: user.id, email: user.email };
        const acessToken = this.jwtService.sign(payload);

        this.logger.log('User registered successfully');
        
        return { user, acessToken };
    }
}