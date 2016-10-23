from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^all/?$', views.promotion_all),
    url(r'^name/(?P<name>.+?)/?$', views.promotion_name),

    url(r'^create/?$', views.promotion_create),
    url(r'^delete/(?P<id>.+?)/?$', views.promotion_delete),
]
