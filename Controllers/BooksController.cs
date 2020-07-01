using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BooksApp.Models;
using BooksApp.ViewModels;
using BooksApp.Migrations;

namespace BooksApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BooksController : ControllerBase
    {
        private readonly BooksDbContext _context;

        public BooksController(BooksDbContext context)
        {
            _context = context;
        }
        /// <summary>
        /// Gets a list of all the books
        /// </summary>
        /// <returns>A list of all the books</returns>

        // GET: api/Books
        [HttpGet]
        public async Task<ActionResult<IEnumerable<BookWithNumberOfReviews>>> GetBooks()
        {
            IQueryable<Book> result = _context.Books;
            var resultList = await result 
                 .Include(f => f.Reviews)
                 .Select(f => BookWithNumberOfReviews.FromBook(f))
                 .ToListAsync();


            return resultList;      
        }
        /// <summary>
        /// Gets a specific book
        /// </summary>
        /// <param name="id">Used to get a specific book</param>
        /// <returns>A specific book</returns>
        // GET: api/Books/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Book>> GetBook(long id)
        {
            var book = await _context.Books.FindAsync(id);

            if (book == null)
            {
                return NotFound();
            }

            return book;
        }
        /// <summary>
        /// Updates a specific book
        /// </summary>
        /// <param name="id">Used to update a specific book</param>
        /// <param name="book"></param>
        /// <returns>An updated book</returns>

        // PUT: api/Books/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBook(long id, Book book)
        {
            if (id != book.Id)
            {
                return BadRequest();
            }

            if (!BookExists(id))
            {
                return NotFound();
            }

            _context.Entry(book).State = EntityState.Modified;


            await _context.SaveChangesAsync();

            return Ok(book);
        }
        /// <summary>
        /// Adds a new book
        /// </summary>
        /// <param name="book"></param>
        /// <returns>The new added book</returns>
        // POST: api/Books
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Book>> PostBook(Book book)
        {

            //Validare an 
            if (book.YearOfRelease <= 0)
            {
                return BadRequest("Invalid value entered for the 'year of release' field!");
            }

            _context.Books.Add(book);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBook", new { id = book.Id }, book);
        }
        /// <summary>
        /// Deletes a book
        /// </summary>
        /// <param name="id">Used to delete a specific book</param>
        /// <returns></returns>
        // DELETE: api/Books/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Book>> DeleteBook(long id)
        {
            var book = await _context.Books.FindAsync(id);
            if (book == null)
            {
                return NotFound();
            }

            _context.Books.Remove(book);
            await _context.SaveChangesAsync();

            return book;
        }

        private bool BookExists(long id)
        {
            return _context.Books.Any(e => e.Id == id);
        }
    }
}