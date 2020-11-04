(function ($) {

  $("#wrap").on(
    "click",
    "#header h1 a, .conTit prev a",
    function () {
      var url = this.href;
      $("#container > #content").remove();
      $("#container").load(url + " #content");
      return false;
    }
  );

  var usedata;
  $.ajax({
    type: "GET",
    url: "data/mountain.json",
    beforeSend: function (xhr) {
      if (xhr.overrideMimeType) {
        xhr.overrideMimeType("application/json");
      }
    },
    success: function (data) {
      usedata = data;
    },
    error: function (abc) {
      alert(abc.status + "오류발생");
    },
  })

  $("body").on("click", "#step_area .setArea a, .mountainContent .mountainiList a, .menuBox a", function (e) {
  e.preventDefault();
  var url = this.href;
  var part = $(this).attr('class')
  $("#container > #content").remove();
  $("#container").load(url + " #content", function () {
    var newContent = "";
    for (var i in usedata[part]) {
      newContent += `<li><div class="img"><img src="${usedata[part][i].photo}" alt=""></div>`;
      newContent += `<div class="doctorInfo"><strong>${usedata[part][i].name}</strong>`;
      newContent += `<p>${usedata[part][i].depart}</p>`;
      newContent += `<div>${usedata[part][i].about}</div></div></li>`;
    }
    $("#content .part1DoctorList").html(`<ul>${newContent}</ul>`);
    });
  });

  $("#topIcon .menu").on("click", function () {
    $("#navWrap").addClass("on");
    $("#lnb").animate(
      {
        right: "0px",
      },
      500
    );
  });
  $("#lnb_close, .menuBox a").on("click", function () {
    $("#lnb").animate(
      {
        right: "-274px",
      },
      500,
      function () {
        $("#navWrap").removeClass("on");
      }
    );
  });

})(jQuery);