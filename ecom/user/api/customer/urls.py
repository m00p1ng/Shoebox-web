from django.conf.urls import url, include
from . import views

urlpatterns = [
    url(r'^all/?$', views.customer_all),
    url(r'^username/(?P<username>.+?)/?$', views.customer_username),

    url(r'^create/?$', views.customer_create),
    url(r'^delete/(?P<username>.+?)/?$', views.customer_delete),
    url(r'^update/(?P<username>.+?)/?$', views.customer_update),
]
