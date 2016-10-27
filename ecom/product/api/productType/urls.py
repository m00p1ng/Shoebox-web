from django.conf.urls import url, include
from . import views

urlpatterns = [
    url(r'^$', views.productType),
    url(r'^(?P<slug>.+?)/?$', views.productType_with_name),
]
