using System.Linq;
using HotChocolate;
using HotChocolate.Data;

namespace CorellianBack
{
    public class Query
    {
        private readonly AppDbContext _dbContext;

        public Query(AppDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public IQueryable<Task> GetGetAllTasks()
        {
            return _dbContext.Tasks;
        }
    }
}
