using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using BooksApp.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace BooksApp.Models
{

    public class BooksDbContext : IdentityDbContext
    {

        public DbSet<Book> Books { get; set; }

        public DbSet<Review> Reviews { get; set; }

        public BooksDbContext(DbContextOptions<BooksDbContext> options)
            : base(options)
        {
        }

    
    }
}