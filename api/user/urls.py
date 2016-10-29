from django.conf.urls import url, include
from . import views

urlpatterns = [
    url(r'^$', views.user),
    url(r'^username/(?P<username>.+?)/?$', views.user_with_username),

    url(r'^role/?', include('api.user.userrole.urls')),
    url(r'^customer/?', include('api.user.customer.urls')),
    url(r'^employee/?', include('api.user.employee.urls')),
]
