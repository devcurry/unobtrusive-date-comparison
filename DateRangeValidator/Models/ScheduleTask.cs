using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using DateRangeValidator.Validators;

namespace DateRangeValidator.Models
{
    public class ScheduleTask
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        //[DateComparer("StartDate", "EndDate", CompareType.LesserThan)]
        public DateTime StartDate { get; set; }
        [DateComparer("EndDate", "StartDate", CompareType.GreaterThan)]
        public DateTime EndDate { get; set; }
    }
}