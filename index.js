$(document).ready(function() {
  var svgFlag = true;
  var svgPolygonWidth;
  var svgPolygonHeight;
  var svgPolygonLeft;
  var svgPolygonTop;

  function setDimentionsOfLinks() {
    for (var i = 1; i <= 4; i++) {
      svgPolygonWidth = $('#pol' + i)[0].getBoundingClientRect().width;
      svgPolygonHeight = $('#pol' + i)[0].getBoundingClientRect().height;
      svgPolygonLeft = $('#pol' + i)[0].getBoundingClientRect().left;
      svgPolygonTop = $('#pol' + i)[0].getBoundingClientRect().top;

      $('#link' + i).css('width', svgPolygonWidth + 'px');
      $('#link' + i).css('height', svgPolygonHeight + 'px');
      $('#link' + i).css('left', svgPolygonLeft + 'px');
      $('#link' + i).css('top', svgPolygonTop + 'px');
    }
  }

  setDimentionsOfLinks();

  $(window).resize(function() {
    setDimentionsOfLinks();
  });

  $('.btnToSvgs').on('click', function() {
    var idSelected = $(this).attr('id');
    // console.log('id selected: ' + idSelected);
    var sectionFromId = idSelected.slice(-1);
    // console.log('seccion a: ' + sectionFromId);
    $('.svgs1, .svgs2, .svgs3').addClass('not-selected');
    $('.svgs' + sectionFromId).removeClass('not-selected');
    if (svgFlag) {
      $('.ken-cont').addClass('not-selected');
      svgFlag = false;
    } else {
      $('.svgs' + sectionFromId).addClass('not-selected');
      $('.ken-cont').removeClass('not-selected');
      svgFlag = true;
    }
  });

  //links of navbar:

  $('.navigationItem').click(function() {
    var idSelected = $(this).attr('id');
    // console.log('id selected: ' + idSelected);
    var sectionFromId = idSelected.slice(-1);
    // console.log('seccion a: ' + sectionFromId);
    $('html,body').animate(
      {
        scrollTop: $('#sec-' + sectionFromId).offset().top
      },
      'slow'
    );
  });

  // clicks en botones del sierpinsky:

  $('.btnToSection').click(function() {
    var idSelected = $(this).attr('id');
    // console.log('id selected: ' + idSelected);
    var sectionFromId = idSelected.slice(-1);
    // console.log('seccion a: ' + sectionFromId);
    $('html,body').animate(
      {
        scrollTop: $('#sec-' + sectionFromId).offset().top
      },
      'slow'
    );
  });
});
