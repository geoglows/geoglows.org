function handler(event) {
  var request = event.request;
  var uri = request.uri;

  if (uri === '/apps' || uri.startsWith('/apps/')) {
    var rest = uri.slice(5);
    return {
      statusCode: 302,
      statusDescription: 'Found',
      headers: { 'location': { value: 'https://apps.geoglows.org' + rest } }
    };
  }

  if (uri.endsWith('/')) {
    request.uri = uri + 'index.html';
  } else {
    var lastSegment = uri.slice(uri.lastIndexOf('/') + 1);
    if (lastSegment.indexOf('.') === -1) {
      request.uri = uri + '/index.html';
    }
  }

  return request;
}
