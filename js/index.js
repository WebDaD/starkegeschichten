/* global $ */
$(document).ready(function () {
  $('.card').on('click', function () {
    $(this).find('video source').attr('src', $(this).data('video'))
    $(this).find('video')[0].load()
    $(this).find('video.card-img').show()
    $(this).find('img.card-img').hide()
    $(this).find('.card-img-overlay').hide()
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
        loadVideo(country)
      },
      disableCountries: ['af', 'ax', 'al', 'dz', 'as', 'ad', 'ao', 'ai', 'aq', 'ag', 'ar', 'am', 'aw', 'au', 'at', 'az', 'bs', 'bh', 'bd', 'bb', 'by', 'be', 'bz', 'bj', 'bm', 'bt', 'bo', 'ba', 'bw', 'bv', 'br', 'io', 'bn', 'bg', 'bf', 'bi', 'kh', 'cm', 'ca', 'cv', 'ky', 'cf', 'td', 'cl', 'cn', 'cx', 'cc', 'co', 'km', 'cg', 'cd', 'ck', 'cr', 'ci', 'hr', 'cu', 'cy', 'cz', 'dk', 'dj', 'dm', 'do', 'ec', 'eg', 'sv', 'gq', 'er', 'ee', 'et', 'fk', 'fo', 'fj', 'fi', 'fr', 'gf', 'pf', 'tf', 'ga', 'gm', 'ge', 'gh', 'gi', 'gr', 'gl', 'gd', 'gp', 'gu', 'gt', 'gg', 'gn', 'gw', 'gy', 'ht', 'hm', 'va', 'hn', 'hk', 'hu', 'is', 'in', 'id', 'ir', 'iq', 'ie', 'im', 'il', 'it', 'jm', 'jp', 'je', 'jo', 'kz', 'ke', 'ki', 'kr', 'kw', 'kg', 'la', 'lv', 'lb', 'ls', 'lr', 'ly', 'li', 'lt', 'lu', 'mo', 'mk', 'mg', 'mw', 'my', 'mv', 'ml', 'mt', 'mh', 'mq', 'mr', 'mu', 'yt', 'mx', 'fm', 'md', 'mc', 'mn', 'me', 'ms', 'ma', 'mz', 'mm', 'nr', 'np', 'nl', 'an', 'nc', 'nz', 'ni', 'ne', 'ng', 'nu', 'nf', 'mp', 'no', 'om', 'pk', 'pw', 'ps', 'pa', 'pg', 'py', 'pe', 'ph', 'pn', 'pl', 'pt', 'pr', 'qa', 're', 'ro', 'ru', 'rw', 'bl', 'sh', 'kn', 'lc', 'mf', 'pm', 'vc', 'ws', 'sm', 'st', 'sa', 'sn', 'sw', 'rs', 'sc', 'sl', 'sg', 'sk', 'si', 'sb', 'so', 'za', 'gs', 'es', 'lk', 'sd', 'sr', 'sj', 'sz', 'se', 'ch', 'sy', 'tw', 'tj', 'tz', 'tl', 'tg', 'tk', 'to', 'tt', 'tn', 'tr', 'tm', 'tc', 'tv', 'ug', 'ua', 'ae', 'gb', 'us', 'um', 'uy', 'uz', 'vu', 've', 'vn', 'vg', 'vi', 'wf', 'eh', 'ye', 'zm', 'zw'],
      individualCountrySettings: [
        {name: 'de', color: '#1e90ff'},
        {name: 'th', color: '#1e90ff'},
        {name: 'na', color: '#1e90ff'}
      ]
    }, function () {
      setFlag('de')
      setFlag('th')
      setFlag('na')
    })
  }
})
function setFlag (country) {
  var pos = $('svg path#' + country + ', svg text#' + country + ', svg rect#' + country).offset()
  $('body').last().after('<img data-country="' + country + '" src="images/flag-' + country + '.png" style="left:' + pos.left + 'px;top:' + pos.top + 'px" class="flag-marker" onclick="loadVideo(\'' + country + '\')"/>')
}
function loadVideo (country) {
  let video = ''
  switch (country) {
    case 'de': video = 'videos/1_Kirschbaum.mp4'; break
    case 'th': video = 'videos/11_Elternstreit.mp4'; break
    case 'na': video = 'videos/8_Allein_im_Busch.mp4'; break
    default: video = ''; break
  }
  if (video !== '') {
    $('.overlay').show()
    $('.custom-modal').show()
    $('.custom-modal video source').attr('src', video)
    $('.custom-modal video')[0].load()
  }
}
