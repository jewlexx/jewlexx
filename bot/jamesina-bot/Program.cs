using Discord;
using Discord.Commands;
using Discord.WebSocket;
using Microsoft.Extensions.Configuration;
using System;
using System.Threading.Tasks;

namespace jamesina_bot
{
	public class Program
	{
        private DiscordSocketClient client;
        private CommandService commands;

        private IConfiguration config;

        public static void Main(string[] args)
			=> new Program().MainAsync().GetAwaiter().GetResult();

        public async Task MainAsync()
		{
            var builder = new ConfigurationBuilder()
                .SetBasePath(AppContext.BaseDirectory)
                .AddJsonFile(path: "config.json");
       
			config = builder.Build();

            client = new DiscordSocketClient(
                new DiscordSocketConfig{ 
                    LogLevel = LogSeverity.Debug
                });

            commands = new CommandService(
				new CommandServiceConfig{
					LogLevel = LogSeverity.Debug,
                    CaseSensitiveCommands = false
                });

            new Commands.CommandHandler(client, commands);

            new Logging.LoggingService(client, commands);

            var token = config.GetSection("discord:token").Value;

            await client.LoginAsync(TokenType.Bot, token);
            await client.StartAsync();

            await Task.Delay(-1);
        }
	}
}
