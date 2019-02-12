// import { Component, OnInit } from '@angular/core';
// import { FileUploader } from 'ng2-file-upload';
// import { AlertifyService } from '../services/alertify.service';
// import { AuthService } from '../services/auth.service';
// import { ActivatedRoute } from '@angular/router';
// import { Photo } from '../models/photo';
// import { environment } from 'src/environments/environment';


// @Component({
//   selector: 'app-photo',
//   templateUrl: './photo.component.html',
//   styleUrls: ['./photo.component.css']
// })
// export class PhotoComponent implements OnInit {

//   constructor(
//     private authService: AuthService,
//     private activatedRoute: ActivatedRoute,
//     private alertifyService: AlertifyService
//   ) { }

//   path = environment.apiUrl;

//   photos: Photo[] = [];
//   uploader: FileUploader;
//   hasBaseDropZoneOver = false//sürükle bırak;
//   baseUrl = this.path;
//   currentMain: Photo;
//   currentCity: any;

//   ngOnInit() {
// debugger;
//     this.activatedRoute.params.subscribe(params=>{
//       debugger;
//       this.currentCity = params["cityId"]
//     })
//     this.initializeUploader();
//   }

//   initializeUploader(){
//     debugger;
//     this.uploader =new FileUploader({
//       url:this.baseUrl +'cities/'+this.currentCity+'/photos',
//       authToken: 'Bearer ' +localStorage.getItem('token'),
//       isHTML5: true,
//       allowedFileType : ['image'],
//       autoUpload:false,
//       removeAfterUpload: true,
//       maxFileSize:10*1024*1024
//     })

//     this.uploader.onSuccessItem = (item, response, status, headers)=>{
//       debugger;
//       if(response){
//         const res :Photo = JSON.parse(response);
//         const photo ={
//           id:res.id,
//           url:res.url,
//           dateAdded:res.dateAdded,
//           description:res.description,
//           isMain:res.isMain,
//           cityId:res.cityId
//         }
//         this.photos.push(photo)
//       }
//     }
//   }

// }
