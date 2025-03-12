using System.Data;
using Dapper;
using Oracle.ManagedDataAccess.Client;
using Microsoft.Extensions.Configuration;
using WebAPI.Models;
using System.Threading.Tasks;

namespace WebAPI.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly string _connectionString;

        public UserRepository(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("OracleDb")!;
        }

        public async Task<int> RegisterUser(User user)
        {
            using IDbConnection db = new OracleConnection(_connectionString);
            string sql = "INSERT INTO SYSTEM.UsersRegister  (UserName, Email, Password) VALUES (:UserName, :Email, :Password) RETURNING Id INTO :Id";
            
            var parameters = new DynamicParameters();
            parameters.Add("UserName", user.UserName);
            parameters.Add("Email", user.Email);
            parameters.Add("Password", user.Password);
            parameters.Add("Id", dbType: DbType.Int32, direction: ParameterDirection.Output);

            await db.ExecuteAsync(sql, parameters);
            return parameters.Get<int>("Id");
        }
    }
}
