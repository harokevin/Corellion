using System.ComponentModel.DataAnnotations;

namespace CorellianBack
{
    public class Product
    {
        [Key]
        public int Id { get; set; }
        [GraphQLName("id")]
        public string IdString => Id.ToString();
        public string Name { get; set; }
        public string SKU { get; set; }
        public decimal Price { get; set; }
        public ICollection<PurchaseOrderItem> PurchaseOrderItems { get; set; }
    }   
}
