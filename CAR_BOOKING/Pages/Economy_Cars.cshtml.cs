using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace CAR_BOOKING.Pages
{
    public class Economy_CarsModel : PageModel
    {



        [Required(ErrorMessage ="Please Enter Name")]
        public string? name { get; set; }
        public void OnGet()
        {



        }


        public void OnPost()
        {

            
            
        }
    }
}
