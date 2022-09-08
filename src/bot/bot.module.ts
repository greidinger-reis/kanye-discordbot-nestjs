import { DiscordModule } from '@discord-nestjs/core';
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';

import {KanyeCommand} from "./commands/kanye.command";

@Module({
  imports: [DiscordModule.forFeature(),HttpModule],
  providers: [KanyeCommand],
})
export class BotModule {}
