$(document).ready(function() {
  let svgFlag = true;

  // TODO: refactor this
  $('.btnToSvgs').on('click', function(event) {
    const idSelected = $(event.target).attr('id');
    const sectionFromId = getSectionId(idSelected);
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

  // Handling clicking of navbar:
  $('.navigationItem').click(() => handleScrollToSectionByEvent(event));

  // Handling clicking in section triangles
  $('.btnToSection').click(() => handleScrollToSectionByEvent(event));

  function handleScrollToSectionByEvent(event) {
    const idSelected = $(event.target).attr('id');
    const sectionFromId = getSectionId(idSelected);
    scrollTo(sectionFromId);
  }

  function getSectionId(selectedId) {
    return selectedId.slice(-1);
  }

  function scrollTo(sectionId) {
    $('html,body').animate(
      {
        scrollTop: $('#sec-' + sectionId).offset().top
      },
      'slow'
    );
  }
});
