using Microsoft.EntityFrameworkCore;

namespace ChatroomApi.Models;

public class ChatroomContext : DbContext
{
    public ChatroomContext(DbContextOptions<ChatroomContext> options)
        : base(options)
    {
    }
    public DbSet<Chatroom> Chatrooms { get; set; } = null!;
}
