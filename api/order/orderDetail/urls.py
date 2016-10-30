from django.conf.urls import url, include
from . import views

urlpatterns = [
    url(r'^$', views.orderDetail),
    url(r'^id/(?P<oid>.+?)/?$', views.orderDetail_with_id),

]
