using System.Threading.Tasks;
using LiveChat.Models;
using Microsoft.AspNetCore.SignalR;

namespace LiveChat.Hubs
{
    public class ChatHub : Hub<IChatClient>
    {
        public async Task SendMessage(ChatMessage message) =>
            await Clients.Others.BroadcastMessage(message);

        public async Task SignIn(string username) =>
            await Clients.Others.NewUserNotification(username);
    }
}