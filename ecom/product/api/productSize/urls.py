from django.conf.urls import url, include
from . import views

urlpatterns = [
    url(r'^$', views.productSize),
    url(r'^(?P<slug>.+?)/?$', views.productSize_with_size),
]
