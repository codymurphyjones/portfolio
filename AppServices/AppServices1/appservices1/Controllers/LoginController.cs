using System.Web.Http;
using System.Data.SqlClient;
using System.Data;

namespace AppServices1.Controllers
{
    public class LoginController : ApiController
    {

        public IHttpActionResult Post(Models.LoginInfo loginInfo)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            //Access Local Database
            try
            {
                
                SqlConnection conn = new SqlConnection();
                conn.ConnectionString = @"Data Source=(LocalDB)\v11.0;AttachDbFilename='|DataDirectory|\Database.mdf';Integrated Security=True";

                conn.Open();

                SqlCommand cmd = new SqlCommand("LoginQuery", conn);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@username", loginInfo.Username);
                cmd.Parameters.AddWithValue("@password", loginInfo.Password);


                SqlDataReader reader = cmd.ExecuteReader();
                Models.Login login = new Models.Login();
                // grab user data and return it after succesful result from StoredProc
                while (reader.Read())
                {
                    login.id = (int)reader["id"];
                    login.Username = reader["username"].ToString();
                    login.Password = reader["password"].ToString();
                    login.Firstname = reader["first_name"].ToString();
                    login.Lastname = reader["last_name"].ToString();
                }

                conn.Close();

                if (login.Success())
                    return Ok(login);

                return Ok(ResultType.NoResult);

            }
            catch
            {
                return Ok(ResultType.NoResult);
            }
        }
    }
}
