﻿using System.Text;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using SehirRehberi.API.Data;
using AutoMapper;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using SehirRehberi.API.Helpers;
using System.IO;

namespace SehirRehberi.API
{
    public class Startup
    {

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }


        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            //#region  winServerProperties
            //services.Configure<IISOptions>(options =>
            //          {
            //              options.AutomaticAuthentication = false;
            //          });

            //#endregion


            //appsettings de belirtik, token key bilgisini.
            var key = Encoding.ASCII.GetBytes(Configuration.GetSection("AppSettings:Token").Value);


            //cloudinary konfigürasyon
            services.Configure<CloudinarySettings>(Configuration.GetSection("CloudinarySettings"));

            //Hangi DB(UseSqlServer) kullancağımız ve appsettings deki connectionString kullnacağımızı belirttik. 
            services.AddDbContext<DataContext>(x => x.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));
            services.AddAutoMapper();//automapper
            services.AddMvc().AddJsonOptions(opt =>
                {
                    opt.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;
                });
            services.AddCors();
            services.AddScoped<IAppRepository, AppRepository>();//eğer senden IAppRepository istenirse, ona AppRepository anlamında

            services.AddScoped<IAuthRepository, AuthRepository>();


            //JWT 
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(opt =>
            {
                opt.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(key),
                    ValidateIssuer = false, //kullanıcıyı doğrulama
                    ValidateAudience = false //kullanıcıyı doğrulama
                };
            });

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseCors(x => x.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin().AllowCredentials());
            app.UseAuthentication();

            //routing dotnet core 
            app.UseMvc(routes =>
                {
                    routes.MapRoute(
                        name: "default",
                        template: "{controller=Home}/{action=Index}/{id?}");

                    routes.MapRoute(
                        name: "spa-fallback",
                        template: "{*url}",
                        defaults: new { controller = "Home", action = "Index" });
                });
        }
    }
}
