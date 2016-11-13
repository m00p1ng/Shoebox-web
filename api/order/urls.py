from django.conf.urls import url,include
from . import views

urlpatterns = [
    url(r'^$', views.order),
    url(r'^id/(?P<oid>.+?)/?$', views.order_with_id),

    url(r'^detail/?', include('api.order.orderDetail.urls'))
]
