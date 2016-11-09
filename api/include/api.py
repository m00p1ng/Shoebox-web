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


def request_get_by_function(model, queryset, function):
    if not queryset:
        return HttpResponse('Not found', status=404)
    return HttpResponse(model.map_referenceID(queryset,function), content_type="application/json")


def errors_to_json(err, action):
    out = {}
    out[action] = False
    out['errorMsg'] = err
    return HttpResponse(dumps(out), content_type='application/json', status=400)


def request_get_to_json(model, queryset):
    if not queryset:
        return HttpResponse('Not found', status=404)
    return HttpResponse(model.map_to_json(queryset), content_type="application/json")
