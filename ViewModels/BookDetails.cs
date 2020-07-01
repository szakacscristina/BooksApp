using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BooksApp.Models;

namespace BooksApp.ViewModels
{
    public class BookDetails
    {

        public long Id { get; set; }

        public string Title { get; set; }

        public int YearOfRelease { get; set; }

        public string Publisher { get; set; }

        public string Author { get; set; }

        public BookGenre BookGenre { get; set; }

        public List<ReviewForBookDetails> Reviews { get; set; }

        public static BookDetails FromBook(Book book)
        {
            return new BookDetails
            {
                Id = book.Id,
                Title = book.Title,
                YearOfRelease = book.YearOfRelease,
                Publisher = book.Publisher,
                Author = book.Author,
                BookGenre = book.BookGenre,
                Reviews = book.Reviews.Select(c => ReviewForBookDetails.FromReview(c)).ToList()
            };
        }
    }
}