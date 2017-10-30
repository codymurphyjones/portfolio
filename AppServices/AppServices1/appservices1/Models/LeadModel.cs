using System;
using System.Collections.Generic;
using System.Web;

namespace AppServices1.Models
{
    public class LeadModel
    {
        public int BarcodeId { get; set; }
        public List<AnswerModel> Answers { get; set; }
    }
}