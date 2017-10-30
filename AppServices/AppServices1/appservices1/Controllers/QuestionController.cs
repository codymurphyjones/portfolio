using System.Collections.Generic;
using System.Web.Http;
using System.Data.SqlClient;
using System.Data;

namespace AppServices1.Controllers
{
    public class QuestionController : ApiController
    {

        public IHttpActionResult Post(Models.QuestionInfo qInfo)
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

                SqlCommand cmd = new SqlCommand("GetQuestions", conn);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@userid", qInfo.UserId);
                cmd.Parameters.AddWithValue("@eventid", qInfo.EventId);


                SqlDataReader reader = cmd.ExecuteReader();
                List<Models.Questions> questions = new List<Models.Questions>();
                // Call Read before accessing data. 
                while (reader.Read())
                {

                    Models.Questions question = new Models.Questions();
                    question.id = (int)reader["id"];
                    question.text = reader["label"].ToString();  //question label
                    question.question = reader["question"].ToString();//Question details
                    questions.Add(question);
                }

                conn.Close();

                return Ok(questions);
            }
            catch
            {
                return Ok(ResultType.NoResult);
            }
        }

    }
}