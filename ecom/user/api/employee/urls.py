from django.conf.urls import url, include
from . import views

urlpatterns = [
    url(r'^$', views.employee),
    url(r'^(?P<username>.+?)/?$', views.employee_with_username),
]
