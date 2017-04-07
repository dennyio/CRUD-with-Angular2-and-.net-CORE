using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using CRUDAngular.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CRUDAngular.Controllers
{
    [Route("api/[controller]")]
    [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true, Duration = -1)]
    public class ProductsController : Controller
    {

        private DataBaseDotnetCoreContext _context;

        public ProductsController(DataBaseDotnetCoreContext context)
        {
            _context = context;
        }

       
        [HttpGet]
        public IEnumerable<dynamic> Get()
        {
            return _context.Product.ToList();
        }

        //// GET api/values/5
        //[HttpGet("{id}")]
        //public string Get(int id)
        //{
        //    return "value";
        //}

        
        [HttpPost]
        public string Post([FromBody] Product product)
        {
            Response.StatusCode = 200;

            try
            {
                Product newProduct = new Product();
                newProduct.Name = product.Name;
                newProduct.Description = product.Description;
                _context.Product.Add(newProduct);
                _context.SaveChanges();

            }
            catch (Exception e)
            {
                Response.StatusCode = 400;
                return e.ToString();
            }
            return "OK";
        }

        [HttpPut]
        public string Put([FromBody] Product product)
        {
            Response.StatusCode = 200;

            try
            {

                product.Name = product.Name;
                product.Description = product.Description;
                _context.Product.Attach(product);
                _context.Entry(product).State = EntityState.Modified;
                _context.SaveChanges();

            }
            catch (Exception e)
            {
                Response.StatusCode = 400;
                return e.ToString();
            }
            return "OK";
        }

        [HttpDelete]
        public String Delete(int id)
        {
            Response.StatusCode = 200;

            try
            {
                Product newProduct = new Product();
                newProduct.Id = id;
                _context.Product.Remove(newProduct);
                _context.SaveChanges();

            }
            catch (Exception e)
            {
                return e.ToString();
            }
            return "OK";
        }
    }
}
