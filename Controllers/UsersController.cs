using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BooksApp.Models;

namespace BooksApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly BooksDbContext _context;

        public UsersController(BooksDbContext context)
        {
            _context = context;
        }
        /// <summary>
        /// Gets a list of all users
        /// </summary>
        /// <returns>A list of all users</returns>

        // GET: api/Users
        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetUser()
        {
            return await _context.Users.ToListAsync();
        }
        /// <summary>
        /// Gets a specific user
        /// </summary>
        /// <param name="id">Used to return a specific user by id.</param>
        /// <returns>A specific user.</returns>
        // GET: api/Users/5
        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetUser(long id)
        {
            var user = await _context.Users.FindAsync(id);

            if (user == null)
            {
                return NotFound();
            }

            return user;
        }
        /// <summary>
        /// Uodates a user. 
        /// </summary>
        /// <param name="id">Updates a specific user.</param>
        /// <param name="user"></param>
        /// <returns>A list of updated users.</returns>
        // PUT: api/Users/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUser(long id, User user)
        {
            if (id != user.Id)
            {
                return BadRequest();
            }

            if (!UserExists(id))
            {
                return NotFound();
            }

            _context.Entry(user).State = EntityState.Modified;


            await _context.SaveChangesAsync();

            return Ok(user);
        }
        /// <summary>
        /// Adds a new user. 
        /// </summary>
        /// <param name="user">Used to search for a user.</param>
        /// <returns> A lst of users.</returns>

        // POST: api/Users
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<User>> PostUser(User user)
        {
            //Validare FirstName
           // if (user.Password.Contains("@"))
                  
            // {
              //  return BadRequest("First Name does not accept special characters.");
           // }
            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUser", new { id = user.Id }, user);
        }
        /// <summary>
        /// Deletes a specific user. 
        /// </summary>
        /// <param name="id"> Is used to detele a specific user.</param>
        /// <returns></returns>
        // DELETE: api/Users/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<User>> DeleteUser(long id)
        {
            var user = await _context.Users.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }

            _context.Users.Remove(user);
            await _context.SaveChangesAsync();

            return user;
        }

        private bool UserExists(long id)
        {
            return _context.Users.Any(e => e.Id == id);
        }
    }
}