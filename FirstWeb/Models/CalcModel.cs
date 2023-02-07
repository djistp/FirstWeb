using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace FirstWeb.Models
{
    public class CalcModel
    {
        //grabbing all the inputs and making sure its from the speficied range
        [Required]
        [Range(0,100)]
        public float Assigments { get; set; }
        [Required]
        [Range(0, 100)]
        public float Gro { get; set; }
        [Required]
        [Range(0, 100)]
        public float Quiz { get; set; }
        [Required]
        [Range(0, 100)]
        public float Midterm { get; set; }
        [Required]
        [Range(0, 100)]
        public float Final { get; set; }
        [Required]
        [Range(0, 100)]
        public float Intex { get; set; }

    }
}
