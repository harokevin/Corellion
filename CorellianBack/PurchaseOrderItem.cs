using System.ComponentModel.DataAnnotations;

namespace CorellianBack
{
    public class PurchaseOrderItem
    {
        [Key]
        public int Id { get; set; }
        [GraphQLName("id")]
        public string IdString => Id.ToString();
        public int PurchaseOrderId { get; set; }
        public PurchaseOrder PurchaseOrder { get; set; }
        public int ProductId { get; set; }
        public Product Product { get; set; }
        public int Quantity { get; set; }
        public decimal UnitPrice { get; set; }
    } 
}
