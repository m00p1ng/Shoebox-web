from django.conf.urls import url, include
from . import views

urlpatterns = [
    url(r'^$', views.supplier),
    url(r'^name/(?P<slug>.+?)/?$', views.supplier_with_name),
]
