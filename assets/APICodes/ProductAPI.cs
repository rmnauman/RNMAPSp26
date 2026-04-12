using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Cryptography;
using System.Web;
using System.Web.Http;
using Week9API.Models;

//ADO.net Entity Framework (DB Operations)

namespace Week9API.Controllers
{
    public class CustomerController : ApiController
    {
        POSEntities db = new POSEntities();

        // WRITE AN API FUNCTION WHICH DISPLAYS TOTAL NUMBER OF PRODUCTS

        [HttpGet]
        public HttpResponseMessage getTotalProducts()
        {
            
            var total = db.Product.Count();
            return Request.CreateResponse(HttpStatusCode.OK, total);
        }

        // WRITE AN API FUNCTION WHICH GETS TOTAL NUMBER OF CATEGORIES EXISTS IN PRODUCT

        [HttpGet]
        public HttpResponseMessage getCatInProducts()
        {
            var totalCat = db.Product.Count(p=>p.Category != null);
            return Request.CreateResponse(HttpStatusCode.OK, totalCat);
        }

        //WRITE AN API FUNCTION WHICH DISPLAYS sum of purchse price of All Products
        [HttpGet]
        public HttpResponseMessage getSumPurchasePrice()
        {
            var totalPrice = db.Product.Sum(p => p.purchasePrice);
            return Request.CreateResponse(HttpStatusCode.OK, totalPrice);
        }

        // WRITE AN API FUNCTION WHICH DISPLAYS TOTAL AMOUNT OF STOCK EXISTS

        [HttpGet]
        public HttpResponseMessage getTotalStockPrice()
        {
            var totalStockPrice = db.Product.Sum(p => p.purchasePrice * p.StockQty);
            return Request.CreateResponse(HttpStatusCode.OK, totalStockPrice);
        }

        //display names of product and purchased quantity of all the products purchased in order 101

/*        Select pname, qty from Product p Join OrderDetails od ON p.pid = od.pid
        where oid = 101
*/


        [HttpGet]
        public HttpResponseMessage getOrderDetails()
        {
            var data = db.Product.Join(
                                        db.OrderDetails.Where(o=>o.oid==101),
                                        p => p.pid,
                                        od => od.pid,
                                        (p, od) => new { p.pname, od.qty }
                                       ).ToList();

            var newData = db.Product.Join(
                                            db.OrderDetails,
                                            p => p.pid,
                                            od => od.pid,
                                            (p, od) => new { p, od }
                                          ).Where(x => x.od.oid == 101).
                                            Select(x=> new { x.p.pname, x.od.qty}).ToList();





            return Request.CreateResponse(HttpStatusCode.OK, data);
        }

















        // Select Selected Columns
        // get PID and get the name of product

        [HttpGet]
        public HttpResponseMessage getProdName(int pid)
        {
            var prod = db.Product.Where(p => p.pid == pid).Select(p=>p.pname).FirstOrDefault();
            if (prod == null)
                return Request.CreateResponse(HttpStatusCode.NotFound, "No Data Exists");
            return Request.CreateResponse(HttpStatusCode.OK, prod);
        }


        //write a function that takes pid and return name and category
        [HttpGet]
        public HttpResponseMessage getProdData()
        {
            
            var data = db.Product.Select(p => new updProduct {pName= p.pname,category=p.Category}).ToList();
            if (data == null)
                return Request.CreateResponse(HttpStatusCode.NotFound, "No Data");
            return Request.CreateResponse(HttpStatusCode.OK, data);
        }

        // Add New Student with Profile Picture (Multi-Part Request)
        [HttpPost]
        public HttpResponseMessage addStudent()
        {
            try
            {
                var request = HttpContext.Current.Request;

                // 1️ Get Student object as JSON string
                string studentJson = request.Form["student"];
                if (string.IsNullOrEmpty(studentJson))
                    return Request.CreateResponse(HttpStatusCode.BadRequest, "Student data is missing.");

                // Deserialize to Student object m
                Student st = JsonConvert.DeserializeObject<Student>(studentJson);
                if (st == null)
                    return Request.CreateResponse(HttpStatusCode.BadRequest, "Invalid student data.");

                // 2️ Get the uploaded image
                if (request.Files.Count == 0)
                    return Request.CreateResponse(HttpStatusCode.BadRequest, "Profile image is required.");

                var postedFile = request.Files[0];

                // 3️ Create filename: aridno-name.extension
                string extension = Path.GetExtension(postedFile.FileName);
                string fileName = st.aridno + "-" + st.Name + extension;

                // 4️ Save image to server folder
                string folderPath = HttpContext.Current.Server.MapPath("~/StudentImages/");
                if (!Directory.Exists(folderPath))
                    Directory.CreateDirectory(folderPath);

                string filePath = Path.Combine(folderPath, fileName);
                postedFile.SaveAs(filePath);

                // 5️ Save student in DB with image path
                st.profilePic = "/StudentImages/" + fileName;

                db.Student.Add(st);
                db.SaveChanges();

                // 6️⃣ Return success response
                return Request.CreateResponse(HttpStatusCode.OK, "Student inserted successfully.");
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, ex.Message);
            }
        }















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
            prod.Category = "Random";
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

    public class updProduct
    {
        public string pName;
        public string category;
    }


    public class newProd {
        public int pid;
        public string pname;
        public Nullable<decimal> purchasePrice { get; set; }

    }

}
