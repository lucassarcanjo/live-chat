using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace LiveChat.Hubs
{
    public class ChatHub : Hub<IChatClient>
    {

    }
}