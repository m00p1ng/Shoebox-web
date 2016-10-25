from django.conf.urls import url, include
from . import views

urlpatterns = [
    url(r'^all/?$', views.userRole_all),

    url(r'^create/?$', views.userRole_create),
    url(r'^delete/(?P<slug>.+?)/?$', views.userRole_delete),
    url(r'^update/(?P<slug>.+?)/?$', views.userRole_update),
]
