/* global $ */
var slideIndex = 1
$(document).ready(function () {
  setInterval(function () {
    showSlides(slideIndex)
  }, 5000)
  showSlides(slideIndex)
  $('#up').on('click', function () {
    $('html, body').animate({scrollTop: ($('#masthead').offset().top)}, 'slow')
  })
  $('.card-description-link').on('click', function () {
    $(this).parent().find('.card-description').show()
    $(this).hide()
  })
  $('.videoimage .video-thumbnail').on('click', function () {
    $(this).parent().find('video').show()
    $(this).parent().find('video')[0].play()
    $(this).parent().find('.video-thumbnail').hide()
  })
  $('.slideshow-slide').on('click', function () {
    $('html, body').animate({scrollTop: ($('#' + $(this).find('img').data('scrollto')).offset().top)}, 'slow')
  })
  $('.mobile-nav-button').on('click', function () {
    $('html, body').animate({scrollTop: ($('#' + $(this).data('scrollto')).offset().top)}, 'slow')
  })
  $('.video-thumbnail').on('click', function () {
    var card = $(this).parent()
    card.find('video.card-img').show()
    card.find('video.card-img')[0].play()
    $(this).hide()
  })
  $('.overlay').on('click', function () {
    $('.overlay').hide()
    $('.custom-modal').hide()
    $('.custom-modal video')[0].pause()
  })
  $('.custom-modal').on('click', function () {
    $('.overlay').hide()
    $('.custom-modal').hide()
    $('.custom-modal video')[0].pause()
  })
  var winWidth = $(window).width()
  if (winWidth >= 578) {
    $('#worldmap').twism('create', {
      customMap: 'maps/world-map.svg',
      littleRedBook: false,
      color: '#d3d3d3',
      hoverColor: '#BB0029',
      backgroundColor: 'white',
      click: function (country) {
        // loadVideo(country)
        scrollTo(country)
      },
      disableCountries: ['af', 'ax', 'al', 'dz', 'as', 'ad', 'ao', 'ai', 'aq', 'ag', 'am', 'aw', 'au', 'at', 'az', 'bs', 'bh', 'bd', 'bb', 'by', 'be', 'bz', 'bj', 'bm', 'bt', 'bo', 'ba', 'bw', 'bv', 'br', 'io', 'bn', 'bg', 'bf', 'bi', 'kh', 'cm', 'ca', 'cv', 'ky', 'cf', 'td', 'cl', 'cn', 'cx', 'cc', 'co', 'km', 'cg', 'cd', 'ck', 'cr', 'ci', 'hr', 'cy', 'cz', 'dk', 'dj', 'dm', 'do', 'ec', 'sv', 'gq', 'er', 'ee', 'et', 'fk', 'fo', 'fj', 'fi', 'fr', 'gf', 'pf', 'tf', 'ga', 'gm', 'ge', 'gh', 'gi', 'gr', 'gl', 'gd', 'gp', 'gu', 'gt', 'gg', 'gn', 'gw', 'gy', 'ht', 'hm', 'va', 'hn', 'hk', 'hu', 'is', 'in', 'id', 'ir', 'iq', 'ie', 'im', 'il', 'it', 'jm', 'jp', 'je', 'jo', 'kz', 'ke', 'ki', 'kr', 'kw', 'kg', 'la', 'lv', 'ls', 'lr', 'ly', 'li', 'lt', 'lu', 'mo', 'mk', 'mg', 'mw', 'my', 'mv', 'ml', 'mt', 'mh', 'mq', 'mr', 'mu', 'yt', 'mx', 'fm', 'md', 'mc', 'me', 'ms', 'ma', 'mz', 'mm', 'nr', 'np', 'nl', 'an', 'nc', 'nz', 'ni', 'ne', 'ng', 'nu', 'nf', 'mp', 'om', 'pk', 'pw', 'ps', 'pa', 'pg', 'py', 'pe', 'ph', 'pn', 'pl', 'pt', 'pr', 'qa', 're', 'ro', 'ru', 'rw', 'bl', 'sh', 'kn', 'lc', 'mf', 'pm', 'vc', 'ws', 'sm', 'st', 'sa', 'sn', 'sw', 'rs', 'sc', 'sl', 'sg', 'sk', 'si', 'sb', 'so', 'za', 'gs', 'es', 'lk', 'sd', 'sr', 'sj', 'sz', 'se', 'ch', 'sy', 'tj', 'tz', 'tl', 'tg', 'tk', 'to', 'tt', 'tn', 'tr', 'tm', 'tc', 'tv', 'ug', 'ua', 'ae', 'gb', 'us', 'um', 'uy', 'uz', 'vu', 've', 'vg', 'vi', 'wf', 'eh', 'ye', 'zm', 'zw'],
      individualCountrySettings: [
        {name: 'de', color: '#075c98'},
        {name: 'eg', color: '#075c98'},
        {name: 'no', color: '#075c98'},
        {name: 'lb', color: '#075c98'},
        {name: 'th', color: '#075c98'},
        {name: 'tw', color: '#075c98'},
        {name: 'mn', color: '#075c98'},
        {name: 'na', color: '#075c98'},
        {name: 'ar', color: '#075c98'},
        {name: 'cu', color: '#075c98'},
        {name: 'vn', color: '#075c98'}
      ]
    }, function () {
      // setFlag('de')
      // setFlag('th')
      // setFlag('na')
    })
  }
})
/* function setFlag (country) {
  var pos = $('svg path#' + country + ', svg text#' + country + ', svg rect#' + country).offset()
  $('body').last().after('<img data-country="' + country + '" src="images/flag-' + country + '.png" style="left:' + pos.left + 'px;top:' + pos.top + 'px" class="flag-marker" onclick="loadVideo(\'' + country + '\')"/>')
} */
/* function loadVideo (country) {
  let video = ''
  switch (country) {
    case 'de': video = 'videos/1_Kirschbaum_Deutschland.mp4'; break
    case 'eg': video = 'videos/2_Grosser_Bruder_Aegypten.mp4'; break
    case 'no': video = 'videos/3_Nicht_Rosa_Norwegen.mp4'; break
    case 'lb': video = 'videos/4-Geschlagen_Syrien.mp4'; break
    case 'th': video = 'videos/7_Ballspielen_verboten_Thailand.mp4'; break
    case 'tw': video = 'videos/11_Elternstreit_Taiwan.mp4'; break
    case 'mn': video = 'videos/9-Sleepy_Mongolei.mp4'; break
    case 'na': video = 'videos/8_Allein_im_Busch_Namibia.mp4'; break
    case 'ar': video = 'videos/13-Stromausfall_Argentinien.mp4'; break
    default: video = ''; break
  }
  if (video !== '') {
    $('.overlay').show()
    $('.custom-modal').show()
    $('.custom-modal video source').attr('src', video)
    $('.custom-modal video')[0].load()
  }
} */
function scrollTo (country) {
  let element = ''
  switch (country) {
    case 'de': element = 'kirschbaum'; break
    case 'eg': element = 'grosser_bruder'; break
    case 'no': element = 'bitte_nicht_rosa'; break
    case 'lb': element = 'geschlagen'; break
    case 'th': element = 'ballspielen_verboten'; break
    case 'tw': element = 'elternstreit'; break
    case 'mn': element = 'sleepy'; break
    case 'na': element = 'allein_im_busch'; break
    case 'ar': element = 'stromausfall'; break
    case 'cu': element = 'meer'; break
    case 'vn': element = 'omelette'; break
    default: element = ''; break
  }
  if (element !== '') {
    $('html, body').animate({ scrollTop: ($('#' + element).offset().top)}, 'slow')
  }
}
function showSlides (n) {
  var i
  var slides = document.getElementsByClassName('slideshow-slide')
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
  }
  slides[slideIndex - 1].style.display = 'block'
  slideIndex++
}
