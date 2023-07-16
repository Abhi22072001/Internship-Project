using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Immigratiom.API.Migrations
{
    public partial class creatingallmodelrequired : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Purpose",
                columns: table => new
                {
                    PurposeID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Reason = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    VisaCharges = table.Column<decimal>(type: "decimal(18,2)", precision: 18, scale: 2, nullable: false),
                    PaymentMode = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PaymentStatus = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Purpose", x => x.PurposeID);
                });

            migrationBuilder.CreateTable(
                name: "Response",
                columns: table => new
                {
                    ResponseID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Action = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Response", x => x.ResponseID);
                });

            migrationBuilder.CreateTable(
                name: "Applicants",
                columns: table => new
                {
                    ApplicantsID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FullName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PassportNumber = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PassportExpiryDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Gender = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Nation = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    VisitingCountry = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    HasCriminalRecord = table.Column<bool>(type: "bit", nullable: false),
                    FIRNumber = table.Column<int>(type: "int", nullable: false),
                    PurposeName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PurposeID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Applicants", x => x.ApplicantsID);
                    table.ForeignKey(
                        name: "FK_Applicants_Purpose_PurposeID",
                        column: x => x.PurposeID,
                        principalTable: "Purpose",
                        principalColumn: "PurposeID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Officers",
                columns: table => new
                {
                    OfficerID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    OfficerName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Region = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ApplicantsID = table.Column<int>(type: "int", nullable: false),
                    ResponseID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Officers", x => x.OfficerID);
                    table.ForeignKey(
                        name: "FK_Officers_Applicants_ApplicantsID",
                        column: x => x.ApplicantsID,
                        principalTable: "Applicants",
                        principalColumn: "ApplicantsID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Officers_Response_ResponseID",
                        column: x => x.ResponseID,
                        principalTable: "Response",
                        principalColumn: "ResponseID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Admin",
                columns: table => new
                {
                    AdminID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    AdminName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ApplicantsID = table.Column<int>(type: "int", nullable: false),
                    ResponseID = table.Column<int>(type: "int", nullable: false),
                    OfficerID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Admin", x => x.AdminID);
                    table.ForeignKey(
                        name: "FK_Admin_Applicants_ApplicantsID",
                        column: x => x.ApplicantsID,
                        principalTable: "Applicants",
                        principalColumn: "ApplicantsID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Admin_Officers_OfficerID",
                        column: x => x.OfficerID,
                        principalTable: "Officers",
                        principalColumn: "OfficerID");
                    table.ForeignKey(
                        name: "FK_Admin_Response_ResponseID",
                        column: x => x.ResponseID,
                        principalTable: "Response",
                        principalColumn: "ResponseID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Admin_ApplicantsID",
                table: "Admin",
                column: "ApplicantsID");

            migrationBuilder.CreateIndex(
                name: "IX_Admin_OfficerID",
                table: "Admin",
                column: "OfficerID");

            migrationBuilder.CreateIndex(
                name: "IX_Admin_ResponseID",
                table: "Admin",
                column: "ResponseID");

            migrationBuilder.CreateIndex(
                name: "IX_Applicants_PurposeID",
                table: "Applicants",
                column: "PurposeID");

            migrationBuilder.CreateIndex(
                name: "IX_Officers_ApplicantsID",
                table: "Officers",
                column: "ApplicantsID");

            migrationBuilder.CreateIndex(
                name: "IX_Officers_ResponseID",
                table: "Officers",
                column: "ResponseID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Admin");

            migrationBuilder.DropTable(
                name: "Officers");

            migrationBuilder.DropTable(
                name: "Applicants");

            migrationBuilder.DropTable(
                name: "Response");

            migrationBuilder.DropTable(
                name: "Purpose");
        }
    }
}
