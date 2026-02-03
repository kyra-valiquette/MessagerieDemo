import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import {CreateMessageDto} from './dtos/create-message.dto'

@Controller('messages')
export class MessagesController {
    @Get()
    listMessages() {
        console.log("Listing messages");
    }
    @Get('/:id')
    getMessageById(@Param('id') id: string) {
        // console.log("Getting message by Id");
        console.log(`Getting message with ID: ${id}`)
    }
    @Post()
    createMessage(@Body() body: CreateMessageDto) {
        // console.log("Creating a new message");
        console.log(`My body : ${body}`)
    }
}
