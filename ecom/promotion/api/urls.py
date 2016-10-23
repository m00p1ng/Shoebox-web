from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^all/?$', views.promotion_all),
    url(r'^name/(?p<slug>.+?)/?$', views.promotion_name),

    url(r'^create/?$', views.promotion_create),
    url(r'^delete/(?p<slug>.+?)/?$', views.promotion_delete),
]
