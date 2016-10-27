from django.conf.urls import url, include
from . import views

urlpatterns = [
    url(r'^$', views.supplier),
    url(r'^name/(?P<slug>.+?)/?$', views.supplier_with_name),
#    url(r'^by(?P<search>.+?)/(?P<slug>.+?)/?$', views.product_search),

    url(r'^company/?', include('ecom.suppliers.api.company.urls'))
]
