from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserViewSet
from django.conf.urls import url
from allauth.account.views import confirm_email


#urlpatterns = [
#    url('rest-auth/', include('rest_auth.urls')),
#    url('rest-auth/registration/', include('rest_auth.registration.urls')),
#    url('account/', include('allauth.urls')),
#    url('accounts-rest/registration/account-confirm-email/(?P<key>.+)/$', confirm_email, name='account_confirm_email'),
#    path('register/', UserViewSet.as_view({'post': 'create'}), name='register'),
#    path("", include(router.urls)),
#]

router = DefaultRouter()
router.register(r'users', UserViewSet, basename='user')
urlpatterns = router.urls