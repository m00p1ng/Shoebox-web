from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^all/?$', views.supplier_all),
    url(r'^name/(?P<slug>.+?)/?$', views.supplier_companyName),

    url(r'^create/?$', views.supplier_create),
    url(r'^delete/(?P<slug>.+?)/?$', views.supplier_delete),
    url(r'^update/(?P<slug>.+?)/?$', views.supplier_update),
]
