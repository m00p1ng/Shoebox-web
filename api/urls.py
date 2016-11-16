"""ecom URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.10/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from django.contrib import admin
from django.views.generic import TemplateView
from .views import home
from .user.views import login, logout

urlpatterns = [
    url(r'^admin/', admin.site.urls),

    # app url
    url(r'^$', home),
    url(r'^shoebox/?', TemplateView.as_view(template_name="index.html")),

    # api url
    url(r'^api/login/?', login),
    url(r'^api/logout/?', logout),
    url(r'^api/product/?', include('api.product.urls')),
    url(r'^api/user/?', include('api.user.urls')),
    url(r'^api/supplier/?', include('api.supplier.urls')),
    url(r'^api/order/?', include('api.order.urls'))
]
