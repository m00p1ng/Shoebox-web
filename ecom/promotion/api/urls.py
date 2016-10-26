from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^all/?$', views.promotion_all),
    url(r'^name/(?P<slug>.+?)/?$', views.promotion_name),

    url(r'^create/?$', views.promotion_create),
    url(r'^update/(?P<slug>.+?)/?$', views.promotion_update),
    url(r'^delete/(?P<slug>.+?)/?$', views.promotion_delete),
]
