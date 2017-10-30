using System;
using System.Collections.Generic;
using System.Web;

namespace AppServices1.Models
{
    public class Login
    {
        public int id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }

        public string Firstname { get; set; }

        public string Lastname { get; set; }

        public bool Success()
        {
            /*
             * These values are only filled in the instance of a successful login
             */
            return (Username != null || Password != null | Firstname != null | Lastname != null);
        }
    }
}