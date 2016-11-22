from django.conf.urls import url, include
from . import views

urlpatterns = [
    url(r'^$', views.product),
    url(r'^name/(?P<slug>.+?)/?$', views.product_with_name),
    url(r'^by(?P<category>.+?)/(?P<slug>.+?)/?$', views.product_category),
    url(r'^(?P<function>.+?)/?$', views.product_sort),
    url(r'^search/(?P<keyword>.+?)/?$', views.product_search),
    url(r'^page/(?P<page>.+?)/?$', views.product_page),

    url(r'^type/?', include('api.product.productType.urls')),
    url(r'^size/?', include('api.product.productSize.urls')),
    url(r'^brand/?', include('api.product.productBrand.urls')),
    url(r'^color/?', include('api.product.productColor.urls')),
]
