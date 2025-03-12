using WebAPI.Models;
using WebAPI.Repositories;
using System.Threading.Tasks;

namespace WebAPI.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;

        public UserService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public async Task<int> RegisterUser(User user)
        {
            // Add any business logic (e.g., password hashing) here before saving
            return await _userRepository.RegisterUser(user);
        }
    }
}
