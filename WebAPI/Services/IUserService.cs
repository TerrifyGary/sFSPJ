using WebAPI.Models;
using System.Threading.Tasks;

namespace WebAPI.Services
{
    public interface IUserService
    {
        Task<int> RegisterUser(User user);
    }
}
