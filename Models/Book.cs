using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BooksApp.Models
{
    public class Book
    {

        public long Id { get; set; }

        public string Title { get; set; }

        public int YearOfRelease { get; set; }

        public string Publisher { get; set; }

        public string Author { get; set; }

        public BookGenre BookGenre { get; set; }

        public List<Review> Reviews { get; set; }
    }
}

public enum BookGenre
{
    Romance,
    Fantasy,
    Science,
    Mistery,
    Action
}
