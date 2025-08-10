using HotChocolate;
using HotChocolate.Data;
using System.Threading.Tasks;

namespace CorellianBack
{
    public class Mutation
    {
        private readonly AppDbContext _dbContext;

        public Mutation(AppDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<Task> CreateTask(
            string title,
            string description,
            string status)
        {
            try
            {
                var task = new Task { Title = title, Description = description, Status = status };
                _dbContext.Tasks.Add(task);
                await _dbContext.SaveChangesAsync();
                return task;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error in createTask: {ex.Message}\n{ex.StackTrace}");
                throw;
            }
        }

        public async Task<Task> UpdateTaskStatus(
            int id,
            string status)
        {
            try
            {
                var task = await _dbContext.Tasks.FindAsync(id);
                if (task == null) return null;
                task.Status = status;
                await _dbContext.SaveChangesAsync();
                return task;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error in updateTaskStatus: {ex.Message}\n{ex.StackTrace}");
                throw;
            }
        }
    }
}
