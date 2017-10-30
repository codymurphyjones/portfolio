using System;
using System.Collections.Generic;
using System.Web;

namespace AppServices1.Models
{
    public class UploadData
    {
        public int Id { get; set; }
        public int ShowID { get; set; }

        public List<LeadModel> Leads { get; set; }
    }
}