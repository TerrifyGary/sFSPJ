using WebAPI.Models;
using System.Threading.Tasks;

namespace WebAPI.Repositories
{
    public interface IUserRepository
    {
        Task<int> RegisterUser(User user);
    }
}
