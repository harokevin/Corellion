using System.ComponentModel.DataAnnotations;

namespace CorellianBack
{
    public class Task
    {
        [Key]
        public int Id { get; set; }
        [GraphQLName("id")]
        public string IdString => Id.ToString();
        public string Title { get; set; }
        public string Description { get; set; }
        public string Status { get; set; }
        
    }
}
