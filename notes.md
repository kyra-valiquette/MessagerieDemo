## Générer module

npx @nestjs/cli generate module messages

## Générer module (--flat : sans créer de folder)

npx @nestjs/cli generate controller messages/messages --flat

### Test msg by ID
GET http://localhost:3000/messages/1

## Run

npm run start:dev



### 4 ÉTAPES DE VALIDATION PIPE

## 1. Aller dans main et autoriser pipe

import {ValidationPipe} from '@nestjs/commun'

# Add this in class

app.useGlobalPipes(new ValidationPipe());

## 2. Avoir classe qui décrit les diff propriétés que le Body aura

a) Ajouter folder dtos dans module
b) ajouter fichier dto : nom-de-route.dto.ts
c) créer la classe avec NomDeRouteDto dans le folder
d) ajouter les param du body de la route et leur type

## 3. Ajouter les validations rules (décorateurs)

import les lib: npm install class-validator class-transformer

class-transformer -- json à class instance (object)

class-validation -- check if ...

## 4. appliquer la classe au route handler dans le controlleur

import la classe du dto dans le  controlleur
appliquer au type du paramètre de la route