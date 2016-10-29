from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.company),
    url(r'^(?P<slug>.+?)/?$', views.company_with_name)
]
