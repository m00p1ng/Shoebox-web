from django.conf.urls import url, include
from . import views

urlpatterns = [
    url(r'^all/?$', views.productColor_all),
    url(r'^name/(?P<slug>.+?)/?$', views.productColor_name),

    url(r'^create/?$', views.productColor_create),
    url(r'^delete/(?P<slug>.+?)/?$', views.productColor_delete),
    url(r'^update/(?P<slug>.+?)/?$', views.productColor_update),
]
