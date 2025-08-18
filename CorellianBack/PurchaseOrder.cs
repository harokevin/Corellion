using System.ComponentModel.DataAnnotations;

namespace CorellianBack
{
    public enum PurchaseOrderStatus
    {
        Pending,
        Approved,
        Received,
        Cancelled
    }

    public class PurchaseOrder
    {
        [Key]
        public int Id { get; set; }
        [GraphQLName("id")]
        public string IdString => Id.ToString();
        public DateTime OrderDate { get; set; }
        public int VendorId { get; set; }
        public Vendor Vendor { get; set; }
        public ICollection<PurchaseOrderItem> Items { get; set; }
        public PurchaseOrderStatus Status { get; set; }
    }
}
