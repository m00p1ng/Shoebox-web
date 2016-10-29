from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.promotion),
    url(r'^(?P<slug>.+?)/?$', views.promotion_with_name),
]
