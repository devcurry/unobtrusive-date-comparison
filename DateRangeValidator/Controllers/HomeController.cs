using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using DateRangeValidator.Models;

namespace DateRangeValidator.Controllers
{
    public class HomeController : Controller
    {
        //
        // GET: /Default/
        [HttpGet]
        public ActionResult Index()
        {
            return View(new ScheduleTask());
        }

        [HttpPost]
        public ActionResult Index(ScheduleTask task)
        {
            
            return View();
        }
    }
}
