import {Body, Controller, Get, Param, Post, Res} from '@nestjs/common';
import {UrlService} from './url.service';

@Controller('')
export class UrlController {
    constructor(private readonly urlService: UrlService) {
    }

    @Get('/shrink/:url')
    getShrink(@Param('url') url: string) {
        return this.urlService.create(url)
    }

    @Post('/shrink')
    postShrink(@Body() body: { url: string }) {
        return this.urlService.create(body.url)
    }

    @Get('/s/:shortenedUrl')
    async unshrink(@Res() res, @Param('shortenedUrl') shortenedUrl: string) {
        const url = await this.urlService.find(shortenedUrl)
        return res.redirect(url)
    }
}
