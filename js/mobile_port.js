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

  $("body").on("click", "#step_area .setArea a, .mountainContent .mountainList a, .menuBox a", function (e) {
  e.preventDefault();
  var url = this.href;
  var part = $(this).attr('class')
  $("#container > #content").remove();
  $("#container").load(url + " #content", function () {
    var newContent = "";
    for (var i in usedata[part]) {
      newContent += `<li><div class="img"><img src="${usedata[part][i].photo}" alt=""></div>`;
      newContent += `<div class="mountainInfo"><strong>${usedata[part][i].name}</strong>`;
      newContent += `<p>${usedata[part][i].place}</p>`;
      newContent += `<div>${usedata[part][i].address}</div></div></li>`;
    }
    $("#content .seoulList, #content .gyeonggiList, #content .gangwonList, #content .gyeongsangList, #content .JeollaList, #content .chungcheongList, #content .incheonList, #content .gwangjuList, #content .busanList, #content .ulsanList, #content .jejuList, #content .othersList").html(`<ul>${newContent}</ul>`);
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

function join_check() {

  if ( !document.member_form.id.value ) {
    alert('아이디를 입력하세요!')
    document.member_form.id.focus()
    return false
  }

  if ( !document.member_form.pass.value ) {
    alert('비밀번호를 입력하세요!')
    document.member_form.pass.focus()
    return false
  }

  if ( !document.member_form.passok.value ) {
    alert('비밀번호 확인을 입력하세요!')
    document.member_form.passok.focus()
    return false
  }

  if ( !document.member_form.name.value ) {
    alert('이름을 입력하세요!')
    document.member_form.name.focus()
    return false
  }

  if ( !document.member_form.tel.value ) {
    alert('전화번호를 입력하세요!')
    document.member_form.tel.focus()
    return false
  }

  if (document.member_form.pass.value !== document.member_form.passok.value ) {
    alert('비밀번호가 일치하지 않습니다.')
    document.member_form.pass.focus()
    return false
  }

  document.member_form.submit()

}


function login_check() {

  if ( !document.login_form.id.value ) {
    alert('아이디를 입력하세요!')
    document.login_form.id.focus()
    return false
  }

  if ( !document.login_form.pass.value ) {
    alert('비밀번호를 입력하세요!')
    document.login_form.pass.focus()
    return false
  }

  document.login_form.submit()

}

function id_check() {
  // window.open("url", "창제목", "옵션값")
  window.open("id_check.php?id="+document.member_form.id.value, "", "width=350, height=200, left=300, top=300, scrollbars=no, resizable=yes")
}