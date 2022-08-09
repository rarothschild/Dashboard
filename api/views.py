from .models import User, UserProfile
from .serializers import UserSerializer
import json
from django.contrib.auth import authenticate, login, logout
from django.views.decorators.http import require_POST
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_protect
from rest_framework.decorators import api_view, permission_classes
from django.utils.decorators import method_decorator
from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.authentication import SessionAuthentication
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAdminUser, BasePermission, IsAuthenticated, SAFE_METHODS
from rest_framework import viewsets, permissions

@method_decorator(csrf_protect, name='dispatch')
class register_view(APIView):
    permission_classes = (permissions.AllowAny, )

    def post(self, request, format=None):
        data = json.loads(json.dumps(self.request.data))

        username = data.get('username')
        password = data.get('password')
        re_password  = data.get('re_password')

        if password == re_password:
            if User.objects.filter(username=username).exists():
                return Response({ 'error': 'Username already exists' })
            else:
                if len(password) < 6:
                    return Response({ 'error': 'Password must be at least 6 characters' })
                else:
                    user = User.objects.create_user(username=username, password=password)
                    user = User.objects.get(id=user.id)
                    user_profile = UserProfile.objects.create(user=user, first_name='', last_name='', phone='', city='')
                    return Response({ 'success': 'User created successfully' })
        else:
            return Response({ 'error': 'Passwords do not match' })

@api_view(['POST'])
@permission_classes((AllowAny,))
@csrf_protect
def login_view(request):
    data = json.loads(json.dumps(request.data))
    username = data.get('username')
    password = data.get('password')
    if username is None or password is None:
        return Response({
            "errors": {
                "__all__": "Please enter both username and password"
            }
        }, status=400)
    user = authenticate(username=username, password=password)
    if user is not None:
        login(request, user)
        return Response({"detail": "Success"})
    return Response(
        {"detail": "Invalid credentials"},
        status=400,
    )

@api_view(['POST'])
@permission_classes((AllowAny,))
@csrf_protect
def logout_view(request):
    try:
        logout(request)
    except:
        return Response({'error': 'Something went wrong'})

@api_view(('GET',))
@permission_classes((AllowAny,))
@ensure_csrf_cookie
def set_csrf_token(request):
    return JsonResponse({"details": "CSRF cookie set"})

@method_decorator(csrf_protect, name='dispatch')
class CheckAuth(APIView):
    def get(self, request, format=None):
        isAuth = User.is_authenticated
        if isAuth:
            return Response({'isAuth':'Success'})
        else:
            return Response({'isAuth':'Failure'})