using FlowersApp.Helpers;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Linq;

namespace BooksApp.Models
{
    public static class SeedData
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using (var context = new BooksDbContext(serviceProvider.GetRequiredService<DbContextOptions<BooksDbContext>>()))
            {

                // Look for any books.
                if (context.Books.Any())
                {
                    return;   // DB has been seeded
                }

                context.Books.AddRange(
                    new Book
                    {
                        Title = "Memories",
                        YearOfRelease = 2018,
                        Publisher = "Tom",
                        Author = "Sanda",
                        BookGenre = BookGenre.Action
                    },

                    new Book
                    {
                        Title = "Cake",
                        YearOfRelease = 2006,
                        Publisher = "House",
                        Author = "Her",
                        BookGenre = BookGenre.Fantasy
                    },

                    new Book
                    {
                        Title = "Summer",
                        YearOfRelease = 2020,
                        Publisher = "House",
                        Author = "Ella",
                        BookGenre = BookGenre.Mistery
                    },

                    new Book
                    {
                        Title = "Garden",
                        YearOfRelease = 2003,
                        Publisher = "Huse",
                        Author = "Karoly",
                        BookGenre = BookGenre.Romance
                    },

                    new Book
                    {
                        Title = "Flowers",
                        YearOfRelease = 2019,
                        Publisher = "House",
                        Author = "Daniel",
                        BookGenre = BookGenre.Science
                    }
                );
                context.SaveChanges();
            }
        }
    }
}