from django.conf.urls import url, include
from . import views

urlpatterns = [
    url(r'^all/?$', views.orderGroup_all),
    url(r'^name/(?P<slug>.+?)/?$', views.orderGroup_name),

    url(r'^create/?$', views.orderGroup_create),
    url(r'^delete/(?P<slug>.+?)/?$', views.orderGroup_delete),
    url(r'^update/(?P<slug>.+?)/?$', views.orderGroup_update),
]
