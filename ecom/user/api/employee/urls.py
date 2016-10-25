from django.conf.urls import url, include
from . import views

urlpatterns = [
    url(r'^all/?$', views.employee_all),
    url(r'^username/(?P<username>.+?)/?$', views.employee_username),

    url(r'^create/?$', views.employee_create),
    url(r'^delete/(?P<username>.+?)/?$', views.employee_delete),
    url(r'^update/(?P<username>.+?)/?$', views.employee_update),
]
