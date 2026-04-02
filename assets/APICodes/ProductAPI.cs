using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using Week9API.Models;

//ADO.net Entity Framework (DB Operations)

namespace Week9API.Controllers
{
    public class CustomerController : ApiController
    {
        POSEntities db = new POSEntities();

        [HttpGet]
        public HttpResponseMessage getAllProducts()
        {
            var products = db.Product.ToList();
            return Request.CreateResponse(HttpStatusCode.OK, products);
        }

        // write an API function which takes id of product and return specific product
        [HttpGet]
        public HttpResponseMessage getProductByID(int pid)
        {
            var product = db.Product.Find(pid);
            if (product != null)
                return Request.CreateResponse(HttpStatusCode.OK, product);
            return Request.CreateResponse(HttpStatusCode.NotFound, "No Product Found");
        }

        [HttpGet]
        public HttpResponseMessage getProdByID(int pid)
        {
            var product = db.Product.Where(p => p.pid == pid).FirstOrDefault();
            if (product != null)
                return Request.CreateResponse(HttpStatusCode.OK, product);
            return Request.CreateResponse(HttpStatusCode.NotFound, "No Data Found");
        }

        // write an api function that takes category and price, and display 
        // all products matching the category and has price above than given price

        [HttpGet]
        public HttpResponseMessage getProdByCatPrice(string cat, int price)
        {
            var products = db.Product.
                Where(p => p.Category == cat && p.sellingPrice > price).ToList();
            if (products.Count>0)
                return Request.CreateResponse(HttpStatusCode.OK, products);
            return Request.CreateResponse(HttpStatusCode.NotFound, "No Data Found");
        }

        // write an api function that inserts a product to database
        [HttpGet]
        public HttpResponseMessage addProduct(int id,string pname, decimal price)
        {
            Product data = new Product()
            {
                pid = id,
                pname = pname,
                purchasePrice = price
            };
            db.Product.Add(data);
            db.SaveChanges();
            return Request.CreateResponse(HttpStatusCode.OK, "Data Saved Successfully");
        }

        [HttpPost]
        public HttpResponseMessage addNewProd(Product p)
        {
            db.Product.Add(p);
            try
            {
                db.SaveChanges();
                return Request.CreateResponse(HttpStatusCode.OK, "Data Inserted Successfully");
            }
            catch (SqlException ea)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest, ea.Message);
            }

        }

        [HttpPost]
        public HttpResponseMessage delProduct(int id)
        {
            var prod = db.Product.Find(id);
            if (prod == null)
                return Request.CreateResponse(HttpStatusCode.NotFound, "No Product Found");
            db.Product.Remove(prod);
            db.SaveChanges();
            return Request.CreateResponse(HttpStatusCode.OK, "Data Deleted Successfully:");

        }


        [HttpPost]
        public HttpResponseMessage updStockProd(int id,int qty)
        {
            var prod = db.Product.Find(id);
            if (prod == null)
                return Request.CreateResponse(HttpStatusCode.NotFound, "No Product Found:");
            prod.StockQty = qty;
            prod.Category = "Random";0
            db.SaveChanges();
            return Request.CreateResponse(HttpStatusCode.OK, "Updated Successfully");
        }

        [HttpGet]
        public HttpResponseMessage getDivision(double n1, double n2)
        {
            if (n2 == 0)
                return Request.CreateResponse(HttpStatusCode.BadRequest, "Cannot Divide By Zero"); ;
            return Request.CreateResponse(HttpStatusCode.OK,n1/n2);
        }
        
        [HttpGet]
        public string getName(string n)
        {
            return "Welcome: " + n;
        }
    }
}
