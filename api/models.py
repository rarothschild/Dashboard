from django.conf import settings
from django.db.models.signals import post_save
from rest_framework.authtoken.models import Token
from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager, PermissionsMixin
import string
import random
# Create your models here.

class UserProfile(AbstractUser):
    username = models.CharField(max_length=50,unique=True)
    #emailaddress = None 

    #REQUIRED_FIELDS = []
    #USERNAME_FIELD = 'username'

    #objects = UserManager()
    pass
