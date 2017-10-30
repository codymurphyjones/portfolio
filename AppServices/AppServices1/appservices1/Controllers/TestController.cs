
using System.Collections.Generic;
using System.Web.Http;

namespace AppServices1.Controllers
{

    public class TestController : ApiController
    {
        //Experimental Controller
        public IHttpActionResult Post(Models.LoginInfo loginInfo)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            

            return Ok(ResultType.NoResult);
        }
    }
}
