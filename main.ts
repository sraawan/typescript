class Facebook{
    user_name:string;
    gender:string;
    email_id:string;
    phone_number:number;
    education:string;
    job:string;
    DOB:number;


    constructor(user_name:string, gender:string,  email_id:string,phone_number:number,education:string,Job:string,DOB:number){
        this.user_name= user_name;
        this.gender=gender;
        this.email_id= email_id;
        this.phone_number=phone_number;
        this.education=education;
        this.job=Job;
        this.DOB=DOB;


    }
    getPhonenumber=()=>{
        return this.phone_number;
    }
}

let sraawanDetails= new Facebook('sraawan','male','akkaraju.sraawan@gmail.com',9700709705,'B.B.A','webdeveloper',19880921);
let user_mobile = sraawanDetails.getPhonenumber();
console.log(user_mobile);


///YouTube start here ////

class youtube{

    likes:number;
    title:string;
    nameOfHost:string;
    views:number;
    dislike:number;
    constructor(host_likes:number,host_title:string,nameofHost:string,host_views:number,host_dislike:number){
          this.likes=host_likes,
          this.title=host_title,
          this.nameOfHost=nameofHost,
          this.title=host_title,
          this.views =host_views,
          this.dislike= host_dislike

    }
    getNoOfLikes=()=>{
            return this.likes;
    }
    setNoOfLikes=(updateLike:number)=>{
        return this.likes=updateLike;
    }
}
let hostlikes = new youtube(5000,"shortfilm","sraawan",10000,300);
let youTubeLike = hostlikes.getNoOfLikes();
console.log("sraawan has"+" "+youTubeLike+" "+"likes" );

/// set function //
let updateLikes = hostlikes.setNoOfLikes(10000);
console.log("updating likes "+" "+updateLikes+" "+ "likes");
