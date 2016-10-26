from django.conf.urls import url, include
from . import views

urlpatterns = [
    url(r'^$', views.productColor),
    url(r'^(?P<slug>.+?)/?$', views.productColor_with_name),
]
