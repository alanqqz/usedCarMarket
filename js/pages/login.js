//背景图片随机切换
var bgNum = randomNum(1, 3);
var bgImg = 'img/bg-' + bgNum + '.jpg';
$('body').width($(window).width())
    .height($(window).height())
    .css({"backgroundImage": 'url(' + bgImg + ')'});
function randomNum(minNum, maxNum) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * minNum + 1);
      break;
    case 2:
      return parseInt(Math.random() * (maxNum - minNum + 1) + minNum);
      break;
    default:
      return 0;
      break;
  }
}





$(document).ready(function(){
//登陆注册
  $(document).keyup(function(event){
    if(event.keyCode ==13){
      $("#login").trigger("click");
    }
  });
  $("#login").on("click",function(){
    var $userName = $("#username").val();
    var $passWord = $("#password").val();
    if($userName == 'admin'&& $passWord == 'admin'){
      location.href='admin.html'
    }else {
      var user = new User($userName,$passWord);
      user.Login();
    }
  })
  //重置密码
  $(".reset-password").on("click",function(){
    var $userName = $("#username").val();
    var $passWord = $("#password").val();
    if($userName != ""){
      var user = new User($userName,$passWord);
      user.resetPassword();
      alert("密码重置成功,请登陆邮箱查询!")
    }else{
      alert("请输入邮箱地址!")
    }
  })
})


