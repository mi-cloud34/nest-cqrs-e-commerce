import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RolesModule } from './roles/roles.module';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { PaymentModule } from './payment/payment.module';
import { OrderModule } from './order/order.module';
import { BasketModule } from './basket/basket.module';
import { DiscountModule } from './discount/discount.module';
import config from './common/insfractructure/config/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [config],
    }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (config) => ({
        secret: config.get('jwt.secret'),
      }),
      global: true,
      inject: [ConfigService],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (config) => ({
        uri: config.get('database.connectionString'),
      }),
      inject: [ConfigService],
    }),
    AuthModule,
    RolesModule,
    ProductModule,
    CategoryModule,
    PaymentModule,
    OrderModule,
    BasketModule,
    DiscountModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
