import { Injectable } from '@nestjs/common';
import { writeFile, readFile } from 'fs/promises';

@Injectable()
export class MessagesRepository{
    async findAll(){
        let content = await readFile('messages.json', 'utf8');
        let msg = JSON.parse(content);

        return msg;        
    }

    async findOne(id:string){
        let content = await readFile('messages.json', 'utf8');
        let msg = JSON.parse(content);

        return msg[id];
    }

    async create(message:string){
        let content = await readFile('messages.json', 'utf8');
        let msg = JSON.parse(content);

        let id:number = Math.floor(Math.random() * 999);
        msg[id] = {id, content:message}

        await writeFile('messages.json', JSON.stringify(msg));
    }
}