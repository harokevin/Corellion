using System.ComponentModel.DataAnnotations;

namespace CorellianBack
{
    public class Vendor
    {
        [Key]
        public int Id { get; set; }
        [GraphQLName("id")]
        public string IdString => Id.ToString();
        public string Name { get; set; }
        public string ContactEmail { get; set; }
        public ICollection<PurchaseOrder> PurchaseOrders { get; set; }
    }
}
