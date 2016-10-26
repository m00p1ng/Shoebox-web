from django.conf.urls import url, include
from . import views

urlpatterns = [
    url(r'^$', views.userRole),
    url(r'^(?P<slug>.+?)/?$', views.userRole_with_role),
]
