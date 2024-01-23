namespace ChatroomApi.Models;

public class Chatroom
{
    public long Id { get; set; }
    public string? Name { get; set; }
    public bool IsPrivate { get; set; }
    public string? Password { get; set; }
    public string? Description { get; set; }
}
