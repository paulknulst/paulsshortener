import {Module} from '@nestjs/common';
import {UrlService} from './url.service';
import {UrlController} from './url.controller';
import {Url, UrlSchema} from "./schemas/url.schema";
import {MongooseModule} from "@nestjs/mongoose";

@Module({
    imports: [MongooseModule.forFeature([{name: Url.name, schema: UrlSchema}])],
    controllers: [UrlController],
    providers: [UrlService]
})
export class UrlModule {
}
