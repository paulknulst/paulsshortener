import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {MongooseModule} from '@nestjs/mongoose';
import {UrlModule} from './url/url.module';
import {APP_GUARD} from "@nestjs/core";
import {ThrottlerGuard, ThrottlerModule} from "@nestjs/throttler";

const DB_HOST = process.env.DB_HOST || 'localhost'
const DB_PORT = process.env.DB_PORT || '12345'

@Module({
    imports: [MongooseModule.forRoot('mongodb://' + DB_HOST + ':' + DB_PORT + '/paulsshortener'), UrlModule,
        ThrottlerModule.forRoot({
        ttl: 60,
        limit: 10,
    }),],
    controllers: [AppController],
    providers: [AppService,
        {
            provide: APP_GUARD,
            useClass: ThrottlerGuard,
        },
    ],
})

export class AppModule {
}
