using System.Collections.Generic;
using System.Web.Http;
using System.Data.SqlClient;
using System.Data;

namespace AppServices1.Controllers
{
    public class ShowsController : ApiController
    {

        public IHttpActionResult GetShows(int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            
            try
            {
                /*
                 * Connect to local DB instead of a live DB
                 */
                SqlConnection conn = new SqlConnection();
                conn.ConnectionString = @"Data Source=(LocalDB)\v11.0;AttachDbFilename='|DataDirectory|\Database.mdf';Integrated Security=True";

                conn.Open();

                /*
                 * Run GetEvents Stored Proc
                 */
                SqlCommand cmd = new SqlCommand("GetEvents", conn);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@id", id);


                SqlDataReader reader = cmd.ExecuteReader();
                List<Models.Shows> shows = new List<Models.Shows>();
                 
                while (reader.Read())
                {
                    Models.Shows show = new Models.Shows();
                    show.id = (int)reader["id"]; 
                    show.Image = reader["image"].ToString(); //Image data to be handled by client, in .png format
                    show.Location = reader["location"].ToString(); //Name of the location
                    show.Name = reader["name"].ToString(); //Name of the event 
                    show.Date = reader["date"].ToString();  //Date of the event
                    shows.Add(show); 
                }

                conn.Close();

                return Ok(shows);
            }
            catch
            {
                return Ok(ResultType.NoResult);
            }
        }

    }
}