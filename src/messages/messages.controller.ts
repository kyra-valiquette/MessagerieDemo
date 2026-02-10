import { Controller, Get, Post, Param, Body, NotFoundException } from '@nestjs/common';
import {CreateMessageDto} from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {

    constructor( private messagesService : MessagesService){}

    @Get()
    listMessages() {
        return this.messagesService.findAll()
    }
    @Get('/:id')
    async getMessageById(@Param('id') id: string) {
        // console.log("Getting message by Id");
        // console.log(`Getting message with ID: ${id}`)

        let message = await this.messagesService.findOne(id)
        return this.messagesService.findOne(id);
    }
    @Post()
    createMessage(@Body() body: CreateMessageDto) {
        // console.log("Creating a new message");
        // console.log(`My body : ${body}`)
        return this.messagesService.create(body.content);
    }
}
