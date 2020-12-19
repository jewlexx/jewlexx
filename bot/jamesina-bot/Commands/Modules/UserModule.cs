using Discord.Commands;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace jamesina_bot.Commands.Modules
{
	class UserModule : ModuleBase<SocketCommandContext>
	{

		[Command("help")]
		public async Task helpCmd()
		{

		}

		[Command("test")]
		public async Task Test()
		{
			await Context.Message.Channel.SendMessageAsync("Test");
		}

	}
}
