import { Injectable, NotFoundException } from '@nestjs/common';
import { MessagesRepository } from './messages.repository'

@Injectable()
export class MessagesService {
    constructor(private messagesRepository : MessagesRepository){}

    async findAll(){
        return this.messagesRepository.findAll();
    }

    async findOne(id:string){
        let message = await this.messagesRepository.findOne(id)
        if(!message){
            throw new NotFoundException("Message not found");
        }
        return message;
    }

    async create(message:string){
        return this.messagesRepository.create(message);
    }

} 
