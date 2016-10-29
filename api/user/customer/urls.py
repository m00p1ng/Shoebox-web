from django.conf.urls import url, include
from . import views

urlpatterns = [
    url(r'^$', views.customer),
    url(r'^(?P<username>.+?)/?$', views.customer_with_username),
]
