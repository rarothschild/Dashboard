import json
from django.contrib.auth import authenticate, login, logout
from django.views.decorators.http import require_POST
from django.views.decorators.csrf import ensure_csrf_cookie
from rest_framework.decorators import api_view, permission_classes
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.authentication import SessionAuthentication
from rest_framework.response import Response
from rest_framework.permissions import AllowAny

@api_view(('GET',))
@ensure_csrf_cookie
def set_csrf_token(request):
    return JsonResponse({"details": "CSRF cookie set"})

@api_view(['POST'])
@permission_classes((AllowAny,))
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

def logout_view(request):
    logout(request)

class CheckAuth(APIView):
    def get(self, request):
        return Response({'detail': 'You\'re Authenticated'})