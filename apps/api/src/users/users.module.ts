
import { Module } from '@nestjs/common';
import { User } from './users.service';

@Module({
  providers: [User],
  exports: [User],
})
export class UsersModule {}
