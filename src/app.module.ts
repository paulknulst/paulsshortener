import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {MongooseModule} from '@nestjs/mongoose';
import {UrlModule} from './url/url.module';

const DB_HOST = process.env.DB_HOST || 'localhost'
const DB_PORT = process.env.DB_PORT || '12345'

@Module({
    imports: [MongooseModule.forRoot('mongodb://' + DB_HOST + ':' + DB_PORT + '/paulsshortener'), UrlModule],
    controllers: [AppController],
    providers: [AppService],
})

export class AppModule {
}
