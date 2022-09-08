import { HttpService } from "@nestjs/axios";
import { Command, DiscordCommand } from "@discord-nestjs/core";

@Command({
  name: "kanye",
  description: "Get a random Kanye West quote",
})
export class KanyeCommand implements DiscordCommand {
  constructor(private httpService: HttpService) {}
  handler(): Promise<string> {
    return this.httpService
      .get("https://api.kanye.rest")
      .toPromise()
      .then((response) => response.data.quote);
  }
}
