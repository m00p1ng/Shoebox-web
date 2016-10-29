from django.http import HttpResponse
from json import dumps

def request_get(queryset):
    if not queryset:
        return HttpResponse('Not found', status=404)
    return HttpResponse(queryset.to_json(), content_type="application/json")

def request_get_real(model, queryset):
    if not queryset:
        return HttpResponse('Not found', status=404)
    return HttpResponse(model.map_referenceID(queryset), content_type="application/json")

def errors_to_json(err):
    return HttpResponse(dumps(err), content_type='application/json', status=400)
