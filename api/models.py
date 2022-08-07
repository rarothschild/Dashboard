from django.db import models
from django.contrib.auth.models import AbstractUser

class UserProfile(AbstractUser):
    username = models.CharField(max_length=50,unique=True)
    #emailaddress = None 

    #REQUIRED_FIELDS = []
    #USERNAME_FIELD = 'username'

    #objects = UserManager()
    pass
