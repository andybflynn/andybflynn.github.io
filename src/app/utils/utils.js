// if protocol is http redirect to https because I can't be dealing with cloudflare's BS right now
if (process.env.NODE_ENV === 'production' && window.location.protocol === 'http:') {
  window.location = window.location.href.replace('http:', 'https:');
}
