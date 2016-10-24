from django.conf.urls import url, include
from . import views

urlpatterns = [
    url(r'^all/?$', views.productSize_all),
    url(r'^name/(?P<slug>.+?)/?$', views.productSize_name),

    url(r'^create/?$', views.productSize_create),
    url(r'^delete/(?P<slug>.+?)/?$', views.productSize_delete),
    url(r'^update/(?P<slug>.+?)/?$', views.productSize_update),
]
