using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FluentValidation;
using BooksApp.Models;

namespace BooksApp.ModelValidators
{
	public class UserValidator : AbstractValidator<User>
	{
		public UserValidator()
		{
			RuleFor(x => x.FirstName).Length(1, 20);
			RuleFor(x => x.Password).Length(5,15);

		}
	}
}

