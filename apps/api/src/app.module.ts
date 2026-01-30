import { Module } from '@nestjs/common';

import { LinksModule } from './links/links.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';


import { AppService } from './app.service';
import { AppController } from './app.controller';

@Module({
  imports: [LinksModule, ConfigModule.forRoot(), MongooseModule.forRoot('mongodb://localhost/nest')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
