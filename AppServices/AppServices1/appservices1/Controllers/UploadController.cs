
using System.Web.Http;

namespace AppServices1.Controllers
{
    public class UploadController : ApiController
    {

        public IHttpActionResult Post(Models.UploadData data)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (data.Id == 1)
                return Ok(data);
            return Ok(ResultType.NoResult);
        }
    }
}
