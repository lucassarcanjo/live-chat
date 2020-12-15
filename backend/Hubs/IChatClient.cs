using System.Threading.Tasks;
using LiveChat.Models;

namespace LiveChat.Hubs
{
    public interface IChatClient
    {
        Task BroadcastMessage(ChatMessage message);

        Task NewUserNotification(string username);
    }
}