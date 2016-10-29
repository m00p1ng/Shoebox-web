from django.conf.urls import url, include
from . import views

urlpatterns = [
    url(r'^$', views.product),
    url(r'^name/(?P<slug>.+?)/?$', views.product_with_name),
    url(r'^by(?P<search>.+?)/(?P<slug>.+?)/?$', views.product_search),

    url(r'^type/?', include('ecom.product.productType.urls')),
    url(r'^size/?', include('ecom.product.productSize.urls')),
    url(r'^brand/?', include('ecom.product.productBrand.urls')),
    url(r'^color/?', include('ecom.product.productColor.urls')),
]
