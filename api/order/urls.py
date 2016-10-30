from django.conf.urls import url,include
from . import views

urlpatterns = [
    url(r'^$', views.order),
    url(r'^id/(?P<cid>.+?)/?$', views.order_with_id),

    url(r'^orderDetail', include('api.order.orderDetail.urls'))
]
