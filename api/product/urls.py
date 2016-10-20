from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^all/$', views.product_all),
    url(r'^name/(?P<name>(.+))/$', views.product_name),
]
