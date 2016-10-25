from django.conf.urls import url, include
from . import views

urlpatterns = [
    url(r'^$', views.productType_all),
    url(r'^name/(?P<slug>.+?)/?$', views.productType_name),

    url(r'^create/?$', views.productType_create),
    url(r'^delete/(?P<slug>.+?)/?$', views.productType_delete),
    url(r'^update/(?P<slug>.+?)/?$', views.productType_update),
]
