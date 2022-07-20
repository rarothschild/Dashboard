from random import random
from django.db import models
from django.contrib.auth.models import AbstractUser
import string
import random
# Create your models here.

def gen_unique_code():
    length = 6
    while True:
        code = ''.join(random.choices(string.ascii_uppercase),k=length)

class UserProfile(AbstractUser):
    pass

    
