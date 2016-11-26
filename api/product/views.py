from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from api.product.models import *
from api.include.api import *
from mongoengine import NotUniqueError
import json

json_type = "application/json"

@csrf_exempt
def product(request):
    body = request.body
    if request.method == 'GET':
        if 'role' in request.session and request.session['role'] == 'employee':
            return product_list(request)
        return customer_product_list(request)
    if request.method == 'POST':
        return product_create(body)
    if request.method == 'PUT':
        pass
    if request.method == 'DELETE':
        pass


@csrf_exempt
def product_with_name(request, slug):
    body = request.body
    if request.method == 'GET':
        return request_get_real(Products, query_by_name(slug))
    if request.method == 'POST':
        return HttpResponse('Method not allowed', status=405)
    if request.method == 'PUT':
        return product_update(body, slug)
    if request.method == 'DELETE':
        return product_delete(slug)


@csrf_exempt
def product_category(request, category, slug):
    body = request.body
    if request.method == 'GET':
        if category == 'type':
            return product_type(slug)
        if category == 'brand':
            return product_brand(request, slug)
        if category == 'size':
            return product_size(slug)
        if category == 'color':
            return product_color(slug)


@csrf_exempt
def product_sort(request, function):
    body = request.body
    if request.method == 'GET':
        if function == 'latest':
            return request_get_real(
                Products,
                product_sort_by(request, 'latest'),
                'sort_by',
                get_page_data(request)
            )
        if function == 'best-seller':
            return request_get_real(
                Products,
                product_sort_by(request,'best-seller'),
                'sort_by',
                get_page_data(request)
            )
        if function == 'most-views':
            return request_get_real(
                Products,
                product_sort_by(request, 'most-views'),
                'sort_by',
                get_page_data(request)
            )


@csrf_exempt
def product_page(request, page):
    if request.method == 'GET':
        return product_by_page(page)


@csrf_exempt
def product_search(request, keyword):
    if request.method == 'GET':
        return search_by_keyword(request, keyword)


@csrf_exempt
def product_latest(request):
    if request.method == 'GET':
        return request_get_real(
            Products,
            product_sort_by(request, 'latest'),
            'sort_by',
            get_page_data(request)
        )


@csrf_exempt
def product_bestseller(request):
    if request.method == 'GET':
        return request_get_real(
            Products,
            product_sort_by(request, 'best-seller'),
            'sort_by',
            get_page_data(request)
        )


@csrf_exempt
def product_mostview(request):
    if request.method == 'GET':
        return request_get_real(
            Products,
            product_sort_by(request, 'most-views'),
            'sort_by',
            get_page_data(request)
        )


def customer_product_list(request):
    data = get_page_data(request)

    product = Products.objects(is_available=True).skip(data['offset']).limit(int(data['result']))

    if data['is_result'] is False and data['is_page'] is False:
        product = Products.objects(is_available=True).all()

    if not product:
        return HttpResponse('Not found', status=404)
    return request_get_real(Products, product, 'customer', data)


def product_list(request):
    data = get_page_data(request)

    product = Products.objects.skip(data['offset']).limit(int(data['result']))

    if data['is_result'] is False and data['is_page'] is False:
        product = Products.objects.all()

    if not product:
        return HttpResponse('Not found', status=404)
    return request_get_real(Products, product, 'employee', data)


def search_by_keyword(request, keyword):
    data = get_page_data(request)

    product = Products.objects.skip(data['offset']).limit(int(data['result'])).filter(name__icontains=keyword)

    if data['is_result'] is False and data['is_page'] is False:
        product = Products.objects.filter(name__icontains=keyword)

    if not product:
        return HttpResponse(status=204)
    return request_get_real(Products, product, 'search', data)


def query_all():
    return Products.objects.all()


def query_latest():
    return Products.objects.all().order_by('-id')


def query_by_name(slug):
    return Products.objects(slug=slug).first()


def query_by_sold_unit():
    return Products.objects().order_by('-sold_unit')


def query_by_view():
    return Products.objects().order_by('-number_of_views')


def query_by_customer_all():
    return Products.objects(is_available=True).all()


def search_by_keyword(request, keyword):
    data = get_page_data(request)

    product = Products.objects.skip(data['offset']).limit(int(data['result'])).filter(name__icontains=keyword)

    if data['is_result'] is False and data['is_page'] is False:
        product = Products.objects.filter(name__icontains=keyword)

    if not product:
        return HttpResponse(status=204)
    return request_get_real(Products, product, 'search', data)


def product_sort_by(request, sort_by):
    data = get_page_data(request)

    product = Products.objects.skip(data['offset']).limit(int(data['result']))

    if data['is_result'] is False and data['is_page'] is False:
        product = Products.objects.all()
    if sort_by == 'best-seller':
         product = product.order_by('-sold_unit')
    elif sort_by == 'most-views':
         product = product.order_by('-number_of_views')
    elif sort_by == 'latest':
        product = product.order_by('-id')
    else:
        product = []

    return product


def product_type(slug):
    types = ProductTypes.objects(slug=slug).first()
    if not types:
        return HttpResponse('Not found', status=404)
    product = Products.objects(types=types.id)
    return request_get_real(Products, product)


def product_brand(request, slug):
    data = get_page_data(request)

    brand = ProductBrands.objects(slug=slug).first()
    product = Products.objects(brand=brand.id).skip(data['offset']).limit(int(data['result']))

    if data['is_result'] is False and data['is_page'] is False:
        product = Products.objects(brand=brand.id)

    if not brand:
        return HttpResponse('Not found', status=404)
    return request_get_real(Products, product, 'brand', data)


def product_size(slug):
    size = ProductSizes.objects(slug=slug).first()
    if not size:
        return HttpResponse('Not found', status=404)
    product = Products.objects(size=size.id)
    return request_get_real(Products, product)


def product_color(slug):
    color = ProductColors.objects(slug=slug).first()
    if not color:
        return HttpResponse('Not found', status=404)
    product = Products.objects(color=color.id)
    return request_get_real(Products, product)


def product_create(body):
    try:
        data = json.loads(body.decode())
        err = Products.validation(data)
        if len(err) == 0:
            Products.create_obj(data)
            message = json.dumps({'created': True})
            return HttpResponse(message, content_type=json_type, status=201)
        else:
            return errors_to_json(err, 'created')

    except ValueError as e:
        err = json.dumps({
            'errorMsg': ['JSON Decode error'],
            'created': False
        })
        return HttpResponse(err, content_type=json_type, status=400)

    except NotUniqueError as e:
        err = json.dumps({
            'errorMsg': ['Product already exist'],
            'created': False
        })
        return HttpResponse(err, content_type=json_type, status=400)


def product_delete(slug):
    item = Products.objects(slug=slug)
    if not item:
        err = json.dumps({
            'errorMsg': ['This product not exist'],
            'deleted': False
        })
        return HttpResponse(err, content_type=json_type, status=404)
    item.delete()
    message = json.dumps({'deleted': True})
    return HttpResponse(message, content_type=json_type)


def product_update(body, slug):
    try:
        item = Products.objects(slug=slug)
        if not item:
            err = json.dumps({
                'errorMsg': ['This product not exist'],
                'updated': False
            })
            return HttpResponse(err, content_type=json_type, status=404)

        data = json.loads(body.decode())
        if not data:
            err = json.dumps({
                'errorMsg': ['Data cannot empty'],
                'updated': False
            })
            return HttpResponse(err, content_type=json_type, status=400)

        Products.update_obj(slug, data)

        message = json.dumps({'updated': True})
        return HttpResponse(message, content_type=json_type)

    except ValueError as e:
        err = json.dumps({
            'errorMsg': ['JSON Decode error'],
            'updated': False
        })
        return HttpResponse(err, content_type=json_type, status=400)
