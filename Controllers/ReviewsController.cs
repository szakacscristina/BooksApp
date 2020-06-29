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
    public class ReviewsController : ControllerBase
    {
        private readonly BooksDbContext _context;

        public ReviewsController(BooksDbContext context)
        {
            _context = context;
        }
        /// <summary>
        /// Gets a list of all the reviews
        /// </summary>
        /// <returns>A list of all the reviews</returns>
        // GET: api/Reviews
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Review>>> GetReview()
        {
            return await _context.Reviews.ToListAsync();
        }
        /// <summary>
        /// Gets a specific review
        /// </summary>
        /// <param name="id">Used to return a specific review</param>
        /// <returns>A specific review</returns>
        // GET: api/Reviews/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Review>> GetReview(long id)
        {
            var review = await _context.Reviews.FindAsync(id);

            if (review == null)
            {
                return NotFound();
            }

            return review;
        }
        /// <summary>
        ///Updates a review
        /// </summary>
        /// <param name="id">Used for updating a specific review</param>
        /// <param name="review"></param>
        /// <returns>The specific updated review</returns>
        // PUT: api/Reviews/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutReview(long id, Review review)
        {
            if (id != review.Id)
            {
                return BadRequest();
            }

            if (!ReviewExists(id))
            {
                return NotFound();
            }

            _context.Entry(review).State = EntityState.Modified;


            await _context.SaveChangesAsync();

            return Ok(review);
        }
        /// <summary>
        /// Adds a new review
        /// </summary>
        /// <param name="review"></param>
        /// <returns>The added review</returns>
        // POST: api/Reviews
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Review>> PostReview(Review review)
        {
            if (review.BookId <= 0)
            {
                return BadRequest("The value entered for field 'book id' must be >0!");
            }
            _context.Reviews.Add(review);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetReview", new { id = review.Id }, review);
        }
        /// <summary>
        /// Deletes a review
        /// </summary>
        /// <param name="id">Used to delete a specific review</param>
        /// <returns></returns>
        // DELETE: api/Reviews/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Review>> DeleteReview(long id)
        {
            var review = await _context.Reviews.FindAsync(id);
            if (review == null)
            {
                return NotFound();
            }

            _context.Reviews.Remove(review);
            await _context.SaveChangesAsync();

            return review;
        }

        private bool ReviewExists(long id)
        {
            return _context.Reviews.Any(e => e.Id == id);
        }
    }
}