import { Module } from '@nestjs/common';

import { LinksModule } from './links/links.module';
import { ConfigModule } from '@nestjs/config';


import { AppService } from './app.service';
import { AppController } from './app.controller';

@Module({
  imports: [LinksModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
