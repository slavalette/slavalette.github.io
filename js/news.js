let index = 0;
const events = document.getElementsByClassName('event')
const prev = document.getElementsByClassName('live-nav-prev')[0]
const next = document.getElementsByClassName('live-nav-next')[0]

next.onclick = nextLive;
prev.onclick = prevLive;

if (events.length > 1) {
  for (var i = 1; i < events.length; i++) {
    events[i].className = 'event hide'
  }
  check()
} else if (events.length === 1) {
  document.getElementsByClassName('live-nav')[0].className = 'live-nav center'
  prev.className = 'hide'
  next.className = 'hide'
} else {}

function check() {
  next.className = 'live-nav-next'
  prev.className = 'live-nav-prev'
  if (index === events.length - 1) {
    next.className = 'live-nav-next disabled'
  } else if (index === 0) {
    prev.className = 'live-nav-prev disabled'
  }

  for (var i = 0; i < events.length; i++) {
    events[i].className = i === index ? 'event' : 'event hide'
  }
}

function nextLive(e) {
  if (index + 1 <= events.length - 1) {
    index += 1
    check()
    document.getElementById('news').scrollIntoView(true)
  }
}

function prevLive(e) {
  if (index - 1 >= 0) {
    index -= 1
    document.getElementById('news').scrollIntoView(true)
    check()
  }
}
