using Microsoft.EntityFrameworkCore;

namespace CorellianBack
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Task> Tasks { get; set; }

        public DbSet<Vendor> Vendors { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<PurchaseOrder> PurchaseOrders { get; set; }
        public DbSet<PurchaseOrderItem> PurchaseOrderItems { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Vendor>()
                .HasMany(v => v.PurchaseOrders)
                .WithOne(po => po.Vendor)
                .HasForeignKey(po => po.VendorId);

            modelBuilder.Entity<Product>()
                .HasMany(p => p.PurchaseOrderItems)
                .WithOne(poi => poi.Product)
                .HasForeignKey(poi => poi.ProductId);

            modelBuilder.Entity<PurchaseOrder>()
                .HasMany(po => po.Items)
                .WithOne(poi => poi.PurchaseOrder)
                .HasForeignKey(poi => poi.PurchaseOrderId);
        }  
    } 
}
