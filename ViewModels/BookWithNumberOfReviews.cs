using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BooksApp.Models;

namespace BooksApp.ViewModels
{
    public class BookWithNumberOfReviews
    {

        public long Id { get; set; }
        public string Title { get; set; }

        public int YearOfRelease { get; set; }

        public string Publisher { get; set; }

        public string Author { get; set; }

        public BookGenre BookGenre { get; set; }

        public long NumberOfReviews { get; set; }

        public static BookWithNumberOfReviews FromBook (Book book)
        {
            return new BookWithNumberOfReviews
            {
                Id = book.Id,
                Title = book.Title,
                YearOfRelease = book.YearOfRelease,
                Publisher = book.Publisher,
                Author = book.Author,
                BookGenre = book.BookGenre,
                NumberOfReviews = book.Reviews.Count
            };
        }
    }
}
