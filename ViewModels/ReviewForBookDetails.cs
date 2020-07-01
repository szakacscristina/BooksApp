using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mime;
using System.Threading.Tasks;
using BooksApp.Models;

namespace BooksApp.ViewModels
{
    public class ReviewForBookDetails
    {


        public string Text { get; set; }

        public int BookId { get; set; }


        public static ReviewForBookDetails FromReview(Review review)
        {
            return new ReviewForBookDetails
            {
                Text = review.Text,

                BookId = review.BookId
            };
        }
    }
}

