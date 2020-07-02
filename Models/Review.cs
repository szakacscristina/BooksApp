using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BooksApp.Models
{
    public class Review
    {
        public long Id { get; set; }
        public string Text { get; set; }
        public int BookId { get; set; }

        public User AddedBy { get; set; }

       // public Book Book { get; set; }


    }
}