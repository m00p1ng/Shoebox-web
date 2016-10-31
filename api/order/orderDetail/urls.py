from django.conf.urls import url, include
from . import views

urlpatterns = [
    url(r'^$', views.orderDetail),
    url(r'^(?P<orderNumber>.+?)/?$', views.orderDetail_with_orderNumber)

]
