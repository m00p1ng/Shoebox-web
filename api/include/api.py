from django.http import HttpResponse
from json import dumps

json_type = "application/json"

def request_get(queryset):
    if not queryset:
        return HttpResponse('Not found', status=404)
    return HttpResponse(queryset.to_json(), content_type=json_type)


def request_get_real(model, queryset, function='none', page='none'):
    if not queryset:
        return HttpResponse('Not found', status=404)
    return HttpResponse(model.map_referenceID(queryset, function, page), content_type=json_type)


def errors_to_json(err, action):
    out = dumps({
        action: False,
        'errorMsg': err
    })
    return HttpResponse(out, content_type=json_type, status=400)


def request_get_to_json(model, queryset, page='none'):
    if not queryset:
        return HttpResponse('Not found', status=404)
    return HttpResponse(model.map_to_json(queryset, page), content_type=json_type)


def get_page_data(request):
    data = {}
    data['page'] = request.GET.get('page')
    data['result'] = request.GET.get('result')
    data['is_page'] = True
    data['is_result'] = True

    if data['result'] is None:
        data['result'] = 10
        data['is_result'] = False

    if data['page'] is None:
        data['page'] = 1
        data['is_page'] = False

    data['offset'] = (int(data['page'])-1)*int(data['result'])

    return data

