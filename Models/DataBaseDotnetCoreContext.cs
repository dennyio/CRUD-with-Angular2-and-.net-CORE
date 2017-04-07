using Microsoft.EntityFrameworkCore;

namespace CRUDAngular.Models
{
    public partial class DataBaseDotnetCoreContext : DbContext
    {
        public virtual DbSet<Product> Product { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
           
            optionsBuilder.UseSqlServer(@"Server=DENNY\SQLEXPRESS;Database=DataBaseDotnetCore;Trusted_Connection=True;");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Product>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Description)
                    .HasColumnName("_description")
                    .HasColumnType("varchar(250)");

                entity.Property(e => e.Name)
                    .HasColumnName("_name")
                    .HasColumnType("varchar(250)");
            });
        }
    }
}