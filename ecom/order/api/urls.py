from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^all/?$', views.order_all),
    url(r'^name/(?P<slug>.+?)/?$', views.order_name),

    url(r'^create/?$', views.order_create),
    url(r'^delete/(?P<slug>.+?)/?$', views.order_delete),
    url(r'^update/(?P<slug>.+?)/?$', views.order_update),

    url(r'^group/', include('ecom.orderGroup.api.urls'))
]
