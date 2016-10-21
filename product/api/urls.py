from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^all/?$', views.product_all),
    url(r'^name/(?P<name>.+?)/?$', views.product_name),
    url(r'^size/(?P<size>.+?)/?$', views.product_size),

    url(r'^create/?$', views.product_create),
    url(r'^delete/(?P<id>.+?)/?$', views.product_delete),
]
