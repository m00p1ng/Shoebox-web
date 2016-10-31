import os
import django
import datetime

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "settings")
django.setup()

from user.models import *

def addRoles():
    UserRoles.objects.create(role='admin')
    UserRoles.objects.create(role="employee")
    UserRoles.objects.create(role="customer")

def addAdmin():
    admin = Employees(
        username = "admin",
        email = "example@mail.com",
        firstname = "",
        lastname = "",
        gender = "",
        birthday = datetime.datetime(
            year = 1970,
            month = 1,
            day = 1
        ),
        city = "",
        district = "",
        street = "",
        zipcode = "",
        phone = "",
        role = "admin",
        is_staff = True,
        is_superuser = True
    )
    admin.set_password("admin123")
    admin.save()


if __name__ == '__main__':
    addRoles()
    addAdmin()
