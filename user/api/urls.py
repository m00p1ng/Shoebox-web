from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^all/?$', views.user_all),
    url(r'^username/(?P<username>.+?)/?$', views.user_username),

    url(r'^create/?$', views.user_create),
    url(r'^delete/(?P<username>.+?)/?$', views.user_delete),
    url(r'^update/(?P<username>.+?)/?$', views.user_update),
]
