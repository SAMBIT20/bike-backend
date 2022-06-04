import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './user.entity';
import { BikeController } from './bike/bike.controller';
import { BikeModule } from './bike/bike.module';
import { Bike } from './bike/bike.entity';
import { ReserveModule } from './reserve/reserve.module';
import { Reserve } from './reserve/reserve.entity';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './roles.guard';
import { ReviewModule } from './review/review.module';
import { Review } from './review/review.entity';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',

      entities: [User, Bike, Reserve, Review],
      synchronize: true,
    }),
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '1d' },
    }),

    BikeModule,

    ReserveModule,

    ReviewModule,

    UserModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
