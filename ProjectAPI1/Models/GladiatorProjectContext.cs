using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

using System.Configuration;

#nullable disable

namespace ProjectAPI1.Models
{
    public partial class GladiatorProjectContext : DbContext
    {
        public GladiatorProjectContext()
        {
        }

        public GladiatorProjectContext(DbContextOptions<GladiatorProjectContext> options)
            : base(options)
        {
        }

        public virtual DbSet<CardDetail> CardDetails { get; set; }
        public virtual DbSet<Product> Products { get; set; }
        public virtual DbSet<TransactionHistory> TransactionHistories { get; set; }
        public virtual DbSet<User> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=DESKTOP-N89V196;Database=GladiatorProject;Integrated Security=True");
                //optionsBuilder.UseSqlServer(Configuration.);
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<CardDetail>(entity =>
            {
                entity.Property(e => e.Id)
                    .HasColumnType("numeric(12, 0)")
                    .ValueGeneratedOnAdd()
                    .HasColumnName("ID");

                entity.Property(e => e.Ctype)
                    .HasMaxLength(9)
                    .IsUnicode(false)
                    .HasColumnName("CType");
            });

            modelBuilder.Entity<Product>(entity =>
            {
                entity.ToTable("Product");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Description)
                    .IsRequired()
                    .HasMaxLength(300)
                    .IsUnicode(false);

                entity.Property(e => e.ImgPath)
                    .IsRequired()
                    .HasMaxLength(6)
                    .IsUnicode(false);

                entity.Property(e => e.Pname)
                    .IsRequired()
                    .HasMaxLength(15)
                    .IsUnicode(false)
                    .HasColumnName("PName");
            });

            modelBuilder.Entity<TransactionHistory>(entity =>
            {
                entity.ToTable("TransactionHistory");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.NextDate).HasColumnType("date");

                entity.Property(e => e.ProductId).HasColumnName("ProductID");

                entity.Property(e => e.UserId).HasColumnName("UserID");

                entity.HasOne(d => d.Product)
                    .WithMany(p => p.TransactionHistories)
                    .HasForeignKey(d => d.ProductId)
                    .HasConstraintName("FK__Transacti__Produ__412EB0B6");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.TransactionHistories)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK__Transacti__UserI__403A8C7D");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.HasIndex(e => e.EmailId, "UQ__Users__7ED91ACE3B7C4374")
                    .IsUnique();

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.AccountNumber)
                    .HasMaxLength(12)
                    .IsUnicode(false);

                entity.Property(e => e.ActivationStatus).HasColumnType("numeric(1, 0)");

                entity.Property(e => e.Address)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.BankName)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.CardId).HasColumnType("numeric(12, 0)");

                entity.Property(e => e.EmailId)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Ifsccode)
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .HasColumnName("IFSCcode");

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.PhoneNumber).HasColumnType("numeric(10, 0)");

                entity.HasOne(d => d.Card)
                    .WithMany(p => p.Users)
                    .HasForeignKey(d => d.CardId)
                    .HasConstraintName("FK__Users__CardId__3B75D760");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
