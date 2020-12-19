using Discord.Commands;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace jamesina_bot.Commands.Modules
{

	[RequireUserPermission(Discord.GuildPermission.Administrator)]
	[Group("Admin")]
	public class AdminCmd : ModuleBase<SocketCommandContext>
	{

		[Command("Shutdown")]
		public async Task ShutdownAsync()
		{

		}

	}
}
