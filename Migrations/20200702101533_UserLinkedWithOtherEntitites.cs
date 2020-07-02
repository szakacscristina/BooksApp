using Microsoft.EntityFrameworkCore.Migrations;

namespace BooksApp.Migrations
{
    public partial class UserLinkedWithOtherEntitites : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<long>(
                name: "AddedById",
                table: "Reviews",
                nullable: true);

            migrationBuilder.AddColumn<long>(
                name: "AddedById",
                table: "Books",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Reviews_AddedById",
                table: "Reviews",
                column: "AddedById");

            migrationBuilder.CreateIndex(
                name: "IX_Books_AddedById",
                table: "Books",
                column: "AddedById");

            migrationBuilder.AddForeignKey(
                name: "FK_Books_Users_AddedById",
                table: "Books",
                column: "AddedById",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Reviews_Users_AddedById",
                table: "Reviews",
                column: "AddedById",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Books_Users_AddedById",
                table: "Books");

            migrationBuilder.DropForeignKey(
                name: "FK_Reviews_Users_AddedById",
                table: "Reviews");

            migrationBuilder.DropIndex(
                name: "IX_Reviews_AddedById",
                table: "Reviews");

            migrationBuilder.DropIndex(
                name: "IX_Books_AddedById",
                table: "Books");

            migrationBuilder.DropColumn(
                name: "AddedById",
                table: "Reviews");

            migrationBuilder.DropColumn(
                name: "AddedById",
                table: "Books");
        }
    }
}
