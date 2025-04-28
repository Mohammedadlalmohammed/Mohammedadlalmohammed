import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { PropertyService } from './properties.service';
import { CreatePropertyDto } from './dtos/CreateProperty.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('properties')
export class PropertyController {
    constructor(private propertyService : PropertyService){}
    @UseGuards(JwtAuthGuard)
    @Post('')
    create(@Req() req, @Body() createPropertyDto : CreatePropertyDto){
        return this.propertyService.createProperty(req.user, createPropertyDto);
    }
}
