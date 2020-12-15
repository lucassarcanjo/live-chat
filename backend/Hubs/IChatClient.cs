using System.Threading.Tasks;
using LiveChat.Models;

namespace LiveChat.Hubs
{
    public interface IChatClient
    {
        Task ReceiveMessage(ChatMessage message);
    }
}