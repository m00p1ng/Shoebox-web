from django.conf.urls import url, include
from . import views

urlpatterns = [
    url(r'^all/?$', views.product_all),
    url(r'^name/(?P<slug>.+?)/?$', views.product_name),

    url(r'^create/?$', views.product_create),
    url(r'^delete/(?P<slug>.+?)/?$', views.product_delete),
    url(r'^update/(?P<slug>.+?)/?$', views.product_update),

    url(r'^type/', include('ecom.product.api.productType.urls')),
    url(r'^size/', include('ecom.product.api.productSize.urls')),
    url(r'^brand/', include('ecom.product.api.productBrand.urls')),
    url(r'^color/', include('ecom.product.api.productColor.urls')),
]
