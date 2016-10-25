from django.conf.urls import url, include
from . import views

urlpatterns = [
    url(r'^$', views.productBrand_all),
    url(r'^name/(?P<slug>.+?)/?$', views.productBrand_name),

    url(r'^create/?$', views.productBrand_create),
    url(r'^delete/(?P<slug>.+?)/?$', views.productBrand_delete),
    url(r'^update/(?P<slug>.+?)/?$', views.productBrand_update),
]
