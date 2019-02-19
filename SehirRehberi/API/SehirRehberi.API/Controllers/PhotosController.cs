using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using SehirRehberi.API.Data;
using SehirRehberi.API.Helpers;
using CloudinaryDotNet;
using SehirRehberi.API.Dtos;
using System.Security.Claims;
using CloudinaryDotNet.Actions;
using SehirRehberi.API.Models;

namespace SehirRehberi.API.Controllers
{
    [Produces("application/json")]
    [Route("api/cities/{cityId}/Photos")]
    public class PhotosController : Controller
    {
        private IAppRepository _appRepository;
        private IMapper _mapper;
        private IOptions<CloudinarySettings> _cloudinaryConfig;
        private Cloudinary _cloudinary;
        public PhotosController(IAppRepository appRepository, IMapper mapper, IOptions<CloudinarySettings> cloudinaryConfig)
        {
            _appRepository = appRepository;
            _mapper = mapper;
            _cloudinaryConfig = cloudinaryConfig;

            Account account = new Account(
                _cloudinaryConfig.Value.CloudName,
                _cloudinaryConfig.Value.ApiKey,
                _cloudinaryConfig.Value.ApiSecret);

            _cloudinary = new Cloudinary(account);
        }


        [HttpPost]
        public ActionResult AddPhotoForCity(int cityId, [FromForm]PhotoForCreationDto photoForCreationDto)
        {
            var city = _appRepository.GetCityById(cityId);

            if (city == null)
            {
                return BadRequest("Şehir bulunamadı.");
            }

            var currentUserId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);

            if (currentUserId != city.UserId)
            {
                return BadRequest("Bu şehire fotoğraf ekleyemezsiniz.");
            }

            var file = photoForCreationDto.File;

            var uploadResult = new ImageUploadResult();

            if (file.Length > 0)
            {
                using (var stream = file.OpenReadStream())
                {
                    var uploadParams = new ImageUploadParams
                    {
                        File = new FileDescription(file.Name, stream)
                    };

                    uploadResult = _cloudinary.Upload(uploadParams);
                }
            }

            photoForCreationDto.Url = uploadResult.Uri.ToString();
            photoForCreationDto.PublicId = uploadResult.PublicId;

            var photo = _mapper.Map<Photo>(photoForCreationDto);
            photo.City = city;

            if (!city.Photos.Any(p => p.IsMain))
            {
                photo.IsMain = true;
            }

            city.Photos.Add(photo);

            if (_appRepository.SaveAll())
            {
                var photoToReturn = _mapper.Map<PhotoForReturnDto>(photo);
                return CreatedAtRoute("GetPhoto", new { id = photo.Id }, photoToReturn);

            }
            return BadRequest("Fotoğraf eklemede hata oluştu.");//resource
        }

        [HttpGet("{id}", Name = "GetPhoto")]
        public ActionResult GetPhoto(int id)
        {
            var photoFromDb = _appRepository.GetPhoto(id);
            var photo = _mapper.Map<PhotoForReturnDto>(photoFromDb);

            return Ok(photo);
        }


    }
}