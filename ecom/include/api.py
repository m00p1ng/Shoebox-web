from django.http import HttpResponse

def request_get(request, data):
    if request.method == 'GET':
        if not data:
            return HttpResponse('Not found', status=404)
        return HttpResponse(data.to_json(), content_type="application/json")
    else:
        return HttpResponse('Method not allowed', status=405)

def request_get_real(request, obj, data):
    if request.method == 'GET':
        if not data:
            return HttpResponse('Not found', status=404)
        return HttpResponse(obj.map_referenceID(data), content_type="application/json")
    else:
        return HttpResponse('Method not allowed', status=405)
