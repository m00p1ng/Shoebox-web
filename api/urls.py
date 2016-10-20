from django.conf.urls import url, include

urlpatterns = [
    url(r'^product/', include('api.product.urls')),
]
