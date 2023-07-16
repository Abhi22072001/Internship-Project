using Immigratiom.DAL.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Diagnostics;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Immigratiom.DAL.Data
{
    public class ApplicationDbContext : DbContext
    {


        public ApplicationDbContext(DbContextOptions options) : base(options)

        {

        }

        

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Purpose>().Property(p => p.VisaCharges).HasPrecision(18, 2);

            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Admin>()
                    .HasOne(c => c.officers)
                    .WithMany()
                    .OnDelete(DeleteBehavior.ClientNoAction);


        }
        



            public DbSet<Applicants> Applicants { get; set; }

           public DbSet<Purpose> Purpose { get; set; }
        
           public DbSet<Response> Response { get; set; }

           public DbSet<Officers> Officers { get; set; }
           public DbSet<Admin> Admin { get; set; }

          
    }
}

