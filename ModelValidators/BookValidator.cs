using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FluentValidation;
using BooksApp.Models;

namespace BooksApp.ModelValidators
{
	public class BookValidator : AbstractValidator<Book>
	{
		public BookValidator()
		{
			RuleFor(x => x.YearOfRelease).InclusiveBetween(1990, 2020);

			RuleFor(x => x.Title).Length(1, 15);

			RuleFor(x => x.BookGenre).Equal(BookGenre.Romance).When(x => x.Author is "Audrey");

		}
	}
}

