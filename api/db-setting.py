from user.models.userrole import UserRoles
#
# def addAdmin():
#     admin = Employees(
#         username = "admin",
#         email = "admin@mail.com",
#         firstname = "",
#         lastname = "",
#         gender = "male",
#         birthday = datetime.datetime(
#             year = 2016,
#             month = 10,
#             day = 29
#         ),
#         city = "admin city",
#         district = "admin district",
#         street = "admin street",
#         zipcode = "admin zipcode",
#         phone = "admin phone",
#         is_staff=True
#     )
#     admin.set_password(data['password'])
#     admin.save()

def addRoles():
    UserRoles.objects.create(role='admin')
    UserRoles.objects.create(role="employee")
    UserRoles.objects.create(role="customer")

# addAdmin()
addRoles()
