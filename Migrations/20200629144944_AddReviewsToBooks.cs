using Microsoft.EntityFrameworkCore.Migrations;

namespace BooksApp.Migrations
{
    public partial class AddReviewsToBooks : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<long>(
                name: "BookId1",
                table: "Reviews",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Reviews_BookId1",
                table: "Reviews",
                column: "BookId1");

            migrationBuilder.AddForeignKey(
                name: "FK_Reviews_Books_BookId1",
                table: "Reviews",
                column: "BookId1",
                principalTable: "Books",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Reviews_Books_BookId1",
                table: "Reviews");

            migrationBuilder.DropIndex(
                name: "IX_Reviews_BookId1",
                table: "Reviews");

            migrationBuilder.DropColumn(
                name: "BookId1",
                table: "Reviews");
        }
    }
}
