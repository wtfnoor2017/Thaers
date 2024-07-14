var animation = bodymovin.loadAnimation({
  container: document.getElementById('logoAnim'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'logo-anim.json'
})

setTimeout(function(){ animation.play(); }, 100);