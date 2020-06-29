using FluentValidation;
using BooksApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;

namespace BooksApp.ModelValidators
{
    public class CommentValidator : AbstractValidator<Review>
    {
        public CommentValidator()
        {
            RuleFor(x => x.Text).Length(1, 100);
        }
    }
}