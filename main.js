var Facebook = /** @class */ (function () {
    function Facebook(user_name, gender, email_id, phone_number, education, Job, DOB) {
        var _this = this;
        this.getPhonenumber = function () {
            return _this.phone_number;
        };
        this.user_name = user_name;
        this.gender = gender;
        this.email_id = email_id;
        this.phone_number = phone_number;
        this.education = education;
        this.job = Job;
        this.DOB = DOB;
    }
    return Facebook;
}());
var sraawanDetails = new Facebook('sraawan', 'male', 'akkaraju.sraawan@gmail.com', 9700709705, 'B.B.A', 'webdeveloper', 19880921);
var user_mobile = sraawanDetails.getPhonenumber();
console.log(user_mobile);
///YouTube start here ////
var youtube = /** @class */ (function () {
    function youtube(host_likes, host_title, nameofHost, host_views, host_dislike) {
        var _this = this;
        this.getNoOfLikes = function () {
            return _this.likes;
        };
        this.setNoOfLikes = function (updateLike) {
            return _this.likes = updateLike;
        };
        this.likes = host_likes,
            this.title = host_title,
            this.nameOfHost = nameofHost,
            this.title = host_title,
            this.views = host_views,
            this.dislike = host_dislike;
    }
    return youtube;
}());
var hostlikes = new youtube(5000, "shortfilm", "sraawan", 10000, 300);
var youTubeLike = hostlikes.getNoOfLikes();
console.log("sraawan has" + " " + youTubeLike + " " + "likes");
/// set function //
var updateLikes = hostlikes.setNoOfLikes(10000);
console.log("updating likes " + " " + updateLikes + " " + "likes");
