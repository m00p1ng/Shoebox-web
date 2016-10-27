from django.conf.urls import url, include
from . import views

urlpatterns = [
    url(r'^$', views.productBrand),
    url(r'^(?P<slug>.+?)/?$', views.productBrand_with_brand),
]
