using Discord;
using Discord.WebSocket;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Configuration.Json;
using System;
using System.Threading.Tasks;

namespace jamesina_bot
{
	public class Program
	{
        private DiscordSocketClient client;

        private readonly IConfiguration config;

        public static void Main(string[] args)
			=> new Program().MainAsync().GetAwaiter().GetResult();

        public async Task MainAsync()
		{
            var builder = new ConfigurationBuilder()
                .SetBasePath(AppContext.BaseDirectory)
                .AddJsonFile(path: "Config\\config.json");
       
			config = builder.Build();

            client = new DiscordSocketClient();

            new Logging.LoggingService(client, );

            //  You can assign your bot token to a string, and pass that in to connect.
            //  This is, however, insecure, particularly if you plan to have your code hosted in a public repository.
            var token = "token";

            // Some alternative options would be to keep your token in an Environment Variable or a standalone file.
            // var token = Environment.GetEnvironmentVariable("NameOfYourEnvironmentVariable");
            // var token = File.ReadAllText("token.txt");
            // var token = JsonConvert.DeserializeObject<AConfigurationClass>(File.ReadAllText("config.json")).Token;

            await client.LoginAsync(TokenType.Bot, token);
            await client.StartAsync();

            // Block this task until the program is closed.
            await Task.Delay(-1);
        }
	}
}
