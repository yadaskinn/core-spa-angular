using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SehirRehberi.API.Data;
using SehirRehberi.API.Dtos;
using AutoMapper;
using SehirRehberi.API.Models;

namespace SehirRehberi.API.Controllers
{
    [Produces("application/json")]
    [Route("api/Cities")]
    public class CitiesController : Controller
    {
        private IAppRepository _appRepository;
        private readonly IMapper _mapper;
        public CitiesController(IAppRepository appRepository, IMapper mapper)
        {
            _appRepository = appRepository;
            _mapper = mapper;
        }

        public ActionResult GetCities()
        {
            //var cities = _appRepository.GetCities().Select(c=> new CityForListDto
            //{
            //    Description = c.Description,
            //    Name = c.Name,
            //    Id = c.Id,
            //    PhotoUrl = c.Photos.FirstOrDefault(x=>x.IsMain==true).Url
            //}).ToList();

            //yukardaki işlemin aynısını automapper ile yaptık.
            var cities = _appRepository.GetCities();
            var citiesToReturn = _mapper.Map<List<CityForListDto>>(cities);

            return Ok(citiesToReturn) ;
        }

        [HttpPost]
        [Route("Add")]
        public ActionResult Add([FromBody]City city)
        {
            _appRepository.Add(city);
            _appRepository.SaveAll();
            return Ok(city);
        }

        [HttpGet]
        [Route("Detail")]
        public ActionResult GetCitiesById(int Id)
        {
            var city = _appRepository.GetCityById(Id);
            var cityToReturn = _mapper.Map<CityForDetailDto>(city);
            return Ok(cityToReturn);
        }

        [HttpGet]
        [Route("Photos")]
        public ActionResult GetPhotosByCity(int cityId)
        {
            var photos = _appRepository.GetPhotosByCity(cityId);
            return Ok(photos);
        }

    }


}