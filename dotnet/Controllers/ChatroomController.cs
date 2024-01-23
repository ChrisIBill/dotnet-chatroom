using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ChatroomApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace dotnet.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ChatroomController : ControllerBase
    {
        private readonly ChatroomContext _context;

        public ChatroomController(ChatroomContext context)
        {
            _context = context;
        }

        // GET: api/Chatroom
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Chatroom>>> GetChatrooms()
        {
            return await _context.Chatrooms.ToListAsync();
        }

        // GET: api/Chatroom/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Chatroom>> GetChatroom(long id)
        {
            var chatroom = await _context.Chatrooms.FindAsync(id);

            if (chatroom == null)
            {
                return NotFound();
            }

            return chatroom;
        }

        // PUT: api/Chatroom/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutChatroom(long id, Chatroom chatroom)
        {
            if (id != chatroom.Id)
            {
                return BadRequest();
            }

            _context.Entry(chatroom).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ChatroomExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Chatroom
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Chatroom>> PostChatroom(Chatroom chatroom)
        {
            _context.Chatrooms.Add(chatroom);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetChatroom), new { id = chatroom.Id }, chatroom);
        }

        // DELETE: api/Chatroom/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteChatroom(long id)
        {
            var chatroom = await _context.Chatrooms.FindAsync(id);
            if (chatroom == null)
            {
                return NotFound();
            }

            _context.Chatrooms.Remove(chatroom);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ChatroomExists(long id)
        {
            return _context.Chatrooms.Any(e => e.Id == id);
        }
    }
}
